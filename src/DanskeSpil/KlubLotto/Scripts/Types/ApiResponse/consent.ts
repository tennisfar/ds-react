export type ConsentState = 'Accepted' | 'Declined' | 'Unanswered';

export type ConsentApiResponse = {
  identifier: string;
  title: string;
  subTitle: string;
  titleIcon: string;
  text: string;
  subConsentsTitle: string;
  textActions: {
    highlight: string;
    type: 'Link';
    content: string;
  }[];
  mainConsents: {
    id: number;
    text: string;
    details: string;
    state: ConsentState;
    lastUpdated: string | null;
  }[];
  subConsents: {
    id: number;
    text: string;
    details: string;
    state: ConsentState;
    lastUpdated: string | null;
  }[];
}[];