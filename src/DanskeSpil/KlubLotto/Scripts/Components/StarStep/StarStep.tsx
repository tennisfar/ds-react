import React, { useCallback, useEffect, useRef, useState } from 'react';
import useTicketsData from '../../Hooks/useTicketsData';
import { StarStepDataSettings } from '../../Types/DataSettings/starStep';
import { TicketApiResponse } from '../../Types/ApiResponse/accounts';

const dayLabels = ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'];

export const StarStep = ({ title, text, disclaimer, lotGained, lotNotGained }: StarStepDataSettings) => {
  const { data: ticketsResponse, isLoading, isError, refetch } = useTicketsData();
  const tickets: TicketApiResponse[] = Array.isArray(ticketsResponse) ? ticketsResponse : [];
  const [totalTickets, setTotalTickets] = useState<string>('00');
  const [animatedStars, setAnimatedStars] = useState<{ [key: string]: boolean }>({});
  const prevTicketsRef = useRef<Array<TicketApiResponse>>([]);

  const reloadData = useCallback(() => {
    if (typeof refetch === 'function') {
      refetch(); // invoke without awaiting; previously used 'void' which triggered linter warning
    }
  }, [refetch]);

  useEffect(() => {
    const handler = () => reloadData();
    document.addEventListener('klublotto:firstLot:achieved', handler);
    return () => {
      document.removeEventListener('klublotto:firstLot:achieved', handler);
    };
  }, [reloadData]);

  // Main effect: handles animation and totalTickets
  useEffect(() => {
    // FIXME: [KlubLotto] specify correct type
    // ref: https://github.com/ds-itu-frontend-service/shared-documentation/blob/main/Tech/Frontend/TYPESCRIPT.md#type-any-and-unknown
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (isError || (ticketsResponse && (ticketsResponse as any).error)) {
      console.error('Error fetching tickets data');
    }

    if (Array.isArray(tickets)) {
      const newAnimatedStars: { [key: string]: boolean } = {};
      tickets.forEach((ticket: TicketApiResponse, idx: number) => {
        const prev = prevTicketsRef.current[idx];
        if (prev) {
          if (!prev.activity && ticket.activity) {
            newAnimatedStars[`${idx}-activity`] = true;
          }
          if (!prev.activity_game && ticket.activity_game) {
            newAnimatedStars[`${idx}-activity_game`] = true;
          }
        }
      });
      setAnimatedStars(newAnimatedStars);

      // Calculate totalTickets
      const total = tickets.reduce(
        (sum: number, t: { activity?: boolean; activity_game?: boolean }) =>
          sum + (t.activity ? 1 : 0) + (t.activity_game ? 1 : 0),
        0
      );
      setTotalTickets(String(total).padStart(2, '0'));
    }
  }, [isLoading, isError, ticketsResponse]);

  // Separate effect: update prevTicketsRef after tickets change
  useEffect(() => {
    if (Array.isArray(tickets)) {
      prevTicketsRef.current = tickets;
    }
  }, [tickets]);

  // Remove animation class after animation duration
  useEffect(() => {
    if (Object.keys(animatedStars).length > 0) {
      const timeout = setTimeout(() => setAnimatedStars({}), 2000);
      return () => clearTimeout(timeout);
    }
  }, [animatedStars]);

  const generateStars = (tickets: Array<TicketApiResponse>) => (
    <div className={'kl-star-step__stars'}>
      {tickets.map((ticket: TicketApiResponse, index: number) => (
        <div key={index} className={'kl-star-step__star-day'}>
          {['activity', 'activity_game'].map((key) => {
            const animateKey = `${index}-${key}`;
            return (
              <div
                className={`kl-star-step__star${animatedStars[animateKey] ? ' kl-star-step__star--animate' : ''}`}
                key={key}
              >
                <img
                  src={ticket[key as 'activity' | 'activity_game'] ? lotGained?.src : lotNotGained?.src}
                  alt={ticket[key as 'activity' | 'activity_game'] ? 'Lod vundet' : 'Lod ikke vundet'}
                  className={
                    ticket.isPast && !ticket[key as 'activity' | 'activity_game'] ? 'kl-star-step__star--past' : ''
                  }
                />
              </div>
            );
          })}
          <div className={'kl-star-step__star-label'}>{dayLabels[ticket.weekDayNumber]}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={'kl-star-step'}>
      <div className={'kl-star-step__count'}>{totalTickets}</div>
      <div className={'kl-star-step__content'}>
        <div className={'kl-star-step__background'}></div>
        <div className={'kl-star-step__title'}>{title}</div>
        {generateStars(tickets)}
        <div className={'kl-star-step__text'}>{text}</div>
      </div>
      <div className={'kl-star-step__terms'} dangerouslySetInnerHTML={{ __html: disclaimer }}/>
    </div>
  );
};
