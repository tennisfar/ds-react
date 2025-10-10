import ticketsData from './data/accounts/tickets.json';

const ApiRequest = async ({ url }: { url: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 200));

  if (url.includes('/accounts/tickets')) {
    return ticketsData;
  }

  return null;
};

export default ApiRequest;
