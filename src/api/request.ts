/* eslint-disable require-await */
import TokenManager, { injectBearer } from 'brainless-token-manager';
import { extend } from 'umi-request';

import { getAccessToken, getRefreshToken } from '@/store/auth/utils';

import { API_PATH } from './constant';

const REQ_TIMEOUT = 25 * 1000;

export const PREFIX_API = process.env.APP_API_URL;

const request = extend({
  prefix: PREFIX_API,
  timeout: REQ_TIMEOUT,
  headers: {
    'Accept-Language': 'vi',
  },
  errorHandler: (error) => {
    // const pathname = window.location.pathname;
    // if (error?.data?.status_code === 406 && error?.data?.errors?.message === 'user.inactive') {
    //   toast.error('Tài khoản của bạn đã bị khóa');
    //   localStorage.clear();
    //   if (pathname !== ROUTE_PATH.SIGN_IN) {
    //     setTimeout(() => {
    //       window.location.href = ROUTE_PATH.SIGN_IN;
    //     }, 500);
    //   }
    //   return;
    // }
    // if (error?.data?.status_code === 401) {
    //   toast.error('Hết phiên làm việc. Vui lòng đăng nhập lại');
    //   localStorage.clear();
    //   // show toast message and pending timeout 2s
    //   if (pathname !== ROUTE_PATH.SIGN_IN) {
    //     setTimeout(() => {
    //       window.location.href = ROUTE_PATH.SIGN_IN;
    //     }, 2000);
    //   }
    //   return;
    // }
    throw error?.data || error?.response;
  },
});

const tokenManager = new TokenManager({
  getAccessToken: async () => {
    const token = getAccessToken();

    return token || '';
  },
  getRefreshToken: async () => {
    const refreshToken = getRefreshToken();

    return refreshToken || '';
  },
  executeRefreshToken: async () => {
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      return {
        token: '',
        refresh_token: '',
      };
    }

    const r = await request.post(API_PATH.AUTH_REFRESH_TOKEN, {
      data: {
        refresh_token: refreshToken,
      },
    });

    return {
      token: r.token,
      refresh_token: r.refresh_token,
    };
  },
  onRefreshTokenSuccess: ({ token, refresh_token }) => {
    if (token && refresh_token) {
      localStorage.setItem(
        process.env.LOCAL_STORAGE_KEY as string,
        JSON.stringify({
          token,
          refreshToken: refresh_token,
        }),
      );
    }
  },
  onInvalidRefreshToken: async () => {
    // Logout
    localStorage.removeItem(process.env.LOCAL_STORAGE_KEY as string);
    window.location.href = '/sign-in';
  },
});

const privateRequest = async (request: any, suffixUrl: string, configs?: any) => {
  const token: string = configs?.token ?? ((await tokenManager.getToken()) as string);

  return request(suffixUrl, injectBearer(token, configs));
};

export { privateRequest, request };
