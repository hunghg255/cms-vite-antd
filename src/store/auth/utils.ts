/* eslint-disable unicorn/prefer-spread */
/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
/* eslint-disable no-prototype-builtins */
export interface IAuth {
  loading?: boolean;
  token: string | null;
  refreshToken?: string | null;
  expiredTime: number;
}

const getAuthLocalStorage = () => {
  try {
    const authData = localStorage.getItem(process.env.LOCAL_STORAGE_KEY);
    return authData && JSON.parse(authData);
  } catch {}
};

export const getAccessToken = () => {
  const data: any = getAuthLocalStorage();

  return data?.token || '';
};

export const getRefreshToken = () => {
  const data: any = getAuthLocalStorage();

  return data?.refreshToken || '';
};
