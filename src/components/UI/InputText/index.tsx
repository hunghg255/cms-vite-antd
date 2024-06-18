import React, { forwardRef, ReactNode } from 'react';

import { Col, Row } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import Input, { InputProps } from 'antd/lib/input/Input';
import classNames from 'classnames';

import styles from './index.module.scss';

interface IInputText extends InputProps {
  className?: string;
  placeholder?: string;
  suffix?: React.ReactNode | string | null;
  prefix?: React.ReactNode | string | null;
  value?: string;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  size?: SizeType;
  bordered?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  allowClear?: boolean;
  onChange?: (event: React.ChangeEvent) => void;
}

export const RenderErrorInput = ({ children, className = '' }: any) => {
  return (
    <Row
      wrap={false}
      align='middle'
      gutter={[8, 0]}
      className={classNames({ [`${className}`]: !!className })}
    >
      <Col>{children}</Col>
    </Row>
  );
};

const InputText = (props: IInputText, ref: any) => {
  const {
    className = '',
    placeholder = '',
    suffix = null,
    prefix = null,
    addonBefore,
    addonAfter,
    disabled = false,
    size,
    bordered,
    allowClear = false,
    ...rest
  } = props;

  return (
    <Input
      className={classNames(styles.inputText, {
        inputText: !suffix && !prefix,
        hasIcon: !!suffix || !!prefix,
        [className]: !!className,
      })}
      placeholder={placeholder}
      suffix={suffix}
      prefix={prefix}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
      disabled={disabled}
      size={size}
      bordered={bordered}
      allowClear={allowClear}
      ref={ref}
      {...rest}
    />
  );
};

InputText.displayName = 'InputText';

export default forwardRef(InputText);
