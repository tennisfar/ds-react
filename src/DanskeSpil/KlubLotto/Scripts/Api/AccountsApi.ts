import ApiRequest from '@SharedScripts/Helpers/ApiRequest';
import { isDevEnvironment } from '../Utils/environment';
import { getDeviceType } from '../Utils/device';
import {
  CancelAccountApiResponse,
  CreateAccountApiResponse,
  RedeemAwardApiResponse,
  TicketsApiResponse,
  WalletApiResponse,
  WalletCountApiResponse,
  WalletListApiResponse,
} from '../Types/ApiResponse/accounts';

const baseUrl = DS.Config.KLUBLOTTO_API_URL;
const withCredentials = isDevEnvironment();

export const cancelAccount = async (): Promise<CancelAccountApiResponse> => {
  const url = `${baseUrl}/accounts/cancel`;
  return await ApiRequest({ url, method: 'PUT', withCredentials });
};

export const createAccount = async (): Promise<CreateAccountApiResponse> => {
  const url = `${baseUrl}/accounts`;
  return await ApiRequest({ url, method: 'POST', withCredentials });
};

export const getTickets = async (): Promise<TicketsApiResponse> => {
  const url = `${baseUrl}/accounts/tickets`;
  return await ApiRequest({ url, withCredentials });
};

export const getWallet = async (): Promise<WalletApiResponse> => {
  const url = `${baseUrl}/accounts/wallet`;
  return await ApiRequest({ url, withCredentials });
};

export const getWalletCount = async (): Promise<WalletCountApiResponse> => {
  const url = `${baseUrl}/accounts/wallet/count`;
  return await ApiRequest({ url, withCredentials });
};

export const getWalletList = async (): Promise<WalletListApiResponse> => {
  const url = `${baseUrl}/accounts/wallet/list`;
  return await ApiRequest({ url, withCredentials });
};

export const redeemAward = async (awardId: string): Promise<RedeemAwardApiResponse> => {
  const url = `${baseUrl}/accounts/wallet/${awardId}/redeem`;
  const headers = { 'X-Device-Type': getDeviceType() };
  return await ApiRequest({ url, method: 'PUT', headers, withCredentials });
};
