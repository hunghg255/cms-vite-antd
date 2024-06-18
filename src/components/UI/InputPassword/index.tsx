/* eslint-disable multiline-ternary */
import React from 'react';

import { Input } from 'antd';
import classNames from 'classnames';

import { Icon } from '@/components/UI/IconFont/Icon';

import styles from './index.module.scss';

interface IInputPassword {
  className?: string;
  placeholder?: string;
  suffix?: React.ReactNode | string | null;
  prefix?: React.ReactNode | string | null;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent) => void;
}

const InputPassword = (props: IInputPassword) => {
  const { className = '', placeholder = '', suffix = null, prefix = null, ...rest } = props;

  return (
    <Input.Password
      className={classNames(styles.inputPassword, {
        [className]: !!className,
      })}
      placeholder={placeholder}
      suffix={suffix}
      prefix={prefix}
      iconRender={(visible) =>
        visible ? (
          <div>
            <Icon icon='icon-eye' className='text-[20px]' />
          </div>
        ) : (
          <div>
            <Icon icon='icon-eye-closed' className='text-[20px]' />
          </div>
        )
      }
      {...rest}
    />
  );
};

InputPassword.displayName = 'InputPassword';

export default InputPassword;
