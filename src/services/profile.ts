import { API_PATH } from '@/api/constant';
import { privateRequest, request } from '@/api/request';
import { getAccessToken } from '@/store/auth/utils';
import { IProfile } from '@/store/profile/profile';

export const getProfile = (): Promise<IProfile> => {
  if (!getAccessToken()) {
    return Promise.reject(new Error('Unauthorized'));
  }

  return privateRequest(request.get, API_PATH.USER_PROFILE);
};
