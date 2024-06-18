import classNames from 'classnames';
import { useAtom } from 'jotai';
import { Link, useLocation } from 'react-router-dom';

import { Icon } from '@/components/UI/IconFont/Icon';
import Text from '@/components/UI/Text';
import { ROUTE_SIDEBAR } from '@/layout/MainLayout/components/sidebar.constant';
import { atomSidebarSmall } from '@/store/sidebarSmall/sidebarSmall';

import styles from './index.module.scss';

const SideBar = () => {
  const location = useLocation();
  const [isCollapse, setIsCollapse] = useAtom(atomSidebarSmall);

  return (
    <div
      className={classNames(styles.sidebarWrap, {
        [styles.sidebarWrapCollapse]: isCollapse,
      })}
    >
      <div className={styles.logo}>
        <img src={isCollapse ? '/svg/logo3.svg' : '/svg/logo1.svg'} alt='logo' />
      </div>

      <div className={styles.listMenu}>
        {ROUTE_SIDEBAR.map((it) => {
          return (
            <Link
              key={it.id}
              to={it.href ?? '/'}
              className={classNames(
                'flex items-center justify-start w-full text-white no-underline px-[16px] py-[20px] gap-[16px]',
                styles.item,
                {
                  [styles.itemActice]: location.pathname.startsWith(it.href ?? '/'),
                  [styles.itemCollapse]: isCollapse,
                },
              )}
            >
              {it.icon()}
              {!isCollapse && <Text type='body1'>{it.title}</Text>}
            </Link>
          );
        })}
      </div>

      <div
        className={classNames(
          'mt-auto flex items-center gap-[8px] cursor-pointer py-[20px] px-[16px] [border-top:1px_solid_#BCBCBC]',
          {
            'justify-center': isCollapse,
          },
        )}
        onClick={() => setIsCollapse(!isCollapse)}
      >
        <Icon
          icon={isCollapse ? 'icon-double-alt-arrow-right' : 'icon-double-alt-arrow-left'}
          className='text-white text-[20px]'
        />

        {!isCollapse && (
          <Text type='body1' className='text-white'>
            Thu gọn menu
          </Text>
        )}
      </div>
    </div>
  );
};

export default SideBar;
