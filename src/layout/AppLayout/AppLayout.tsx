import { Suspense } from 'react';

import { useMount } from 'ahooks';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/routes/route.constant';
import { getAccessToken } from '@/store/auth/utils';
import { useProfileInitial } from '@/store/profile/useProfileInitial';

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useProfileInitial();

  useMount(() => {
    const isLogin = getAccessToken();
    if (!isLogin) {
      if (location.pathname === ROUTE_PATH.FORGOT_PASSWORD) {
        return;
      }
      return navigate(ROUTE_PATH.SIGN_IN);
    }

    if (location.pathname === '/') {
      navigate(ROUTE_PATH.BRANCH);
    }
  });

  return (
    <Suspense fallback={undefined}>
      <Outlet />
    </Suspense>
  );
};

export default AppLayout;
