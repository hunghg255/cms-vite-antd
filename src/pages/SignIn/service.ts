import { API_PATH } from '@/api/constant';
import { request } from '@/api/request';

export const serviceLogin = (data: { username: string; password: string }) => {
  return request.post(API_PATH.AUTH_LOGIN, {
    data,
  });
};
