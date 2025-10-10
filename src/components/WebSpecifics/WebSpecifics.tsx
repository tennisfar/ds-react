import './web-specifics.less';
import burger from './burger.svg';
import logo from './logo.svg';
import middle from './middle.svg';
import user from './user.svg';
import { useUrlParam } from '../../hooks/useUrlParam.ts';
import { useNavigate } from '@tanstack/react-router';
import React from 'react';

export const WebSpecifics = () => {
  const hasAppParam = useUrlParam('app');
  const navigate = useNavigate();

  if (hasAppParam) {
    return null;
  }

  const handleNavigationClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Get current search params and add 'app'
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('app', '');

    // Navigate with the updated search params
    navigate({
      // @ts-ignore
      search: Object.fromEntries(searchParams),
      replace: true,
    });
  };

  return (
    <>
      <div className="responsible-gaming__top" onClick={handleNavigationClick}></div>

      <div className="ds-navigation" onClick={handleNavigationClick}>
        <div className="ds-navigation-main-menu">
          <img src={burger} className="ds-navigation__burger" alt="" />
          <img src={logo} className="ds-navigation__logo" alt="" />
          <img src={middle} className="ds-navigation__middle" alt="" />
          <img src={user} className="ds-navigation__user" alt="" />
        </div>
      </div>
    </>
  );
};
