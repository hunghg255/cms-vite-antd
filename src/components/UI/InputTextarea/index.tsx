import React from 'react';

import { Input } from 'antd';
import classNames from 'classnames';

interface IInputTextarea {
  className?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent) => void;
}

const InputTextarea = (props: IInputTextarea) => {
  const { className = '', placeholder = '', ...rest } = props;

  return (
    <Input.TextArea
      className={classNames('inputTextarea', {
        [className]: !!className,
      })}
      placeholder={placeholder}
      {...rest}
    />
  );
};

InputTextarea.displayName = 'InputTextarea';

export default InputTextarea;
