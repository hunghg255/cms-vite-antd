// import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/routes/route.constant';
import { IAuth, getAccessToken } from '@/store/auth/utils';

const setAuthData = (data: IAuth): void => {
  localStorage.setItem(process.env.LOCAL_STORAGE_KEY as string, JSON.stringify(data));
};

export const useAuth = () => {
  const onLogin = (data: IAuth) => {
    try {
      setAuthData(data);
      window.location.href = ROUTE_PATH.BRANCH;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onLogout = () => {
    try {
      localStorage.removeItem(process.env.LOCAL_STORAGE_KEY as string);
      window.location.href = ROUTE_PATH.SIGN_IN;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return {
    isLogin: !!getAccessToken(),
    setAuthData,
    onLogin,
    onLogout,
  };
};
