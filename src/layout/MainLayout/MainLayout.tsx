import { Suspense } from 'react';

import { useMount } from 'ahooks';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from '@/layout/MainLayout/components/Header';
import SideBar from '@/layout/MainLayout/components/Sidebar';
import { ROUTE_PATH } from '@/routes/route.constant';
import { getAccessToken } from '@/store/auth/utils';
import { atomSidebarSmall } from '@/store/sidebarSmall/sidebarSmall';

import styles from './index.module.scss';

const MainLayout = () => {
  const navigate = useNavigate();
  const [isCollapse] = useAtom(atomSidebarSmall);

  useMount(() => {
    const isLogin = getAccessToken();
    if (!isLogin) {
      return navigate(ROUTE_PATH.SIGN_IN);
    }
  });

  return (
    <Suspense fallback={undefined}>
      <SideBar />

      <div
        className={classNames(styles.contentWrap, {
          [styles.contentWrapCollapse]: isCollapse,
        })}
      >
        <Header />
        <main className={classNames(styles.content)}>
          <div>
            <Outlet />
          </div>
        </main>
      </div>
    </Suspense>
  );
};

export default MainLayout;
