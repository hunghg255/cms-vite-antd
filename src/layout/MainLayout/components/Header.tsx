import React from 'react';

import Text from '@/components/UI/Text';
import { useProfile } from '@/store/profile/useProfile';

import styles from './index.module.scss';

const Header = () => {
  const profile = useProfile();

  return (
    <header className={styles.mainHeaderWrap}>
      <div className={'text-right'}>
        <Text type='title2-semi-bold' color='primary-main'>
          {profile?.email ?? 'admin@gmail.com'}
        </Text>
        <Text type='body2' color='text-primary' className='mb-0'>
          Admin
        </Text>
      </div>
    </header>
  );
};

export default Header;
