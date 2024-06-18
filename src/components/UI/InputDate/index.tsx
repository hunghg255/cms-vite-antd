import React from 'react';

import { DatePicker } from 'antd';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { Icon } from '@/components/UI/IconFont/Icon';

interface IInputDate {
  className?: string;
  placeholder?: string;
  suffix?: React.ReactNode | string | null;
  prefix?: React.ReactNode | string | null;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  format?: string;
  onChange?: (event: React.ChangeEvent) => void;
  disabledDate?: (currentDate: dayjs.Dayjs) => boolean;
}

const InputDate: React.FC<IInputDate> = (props) => {
  const { className = '', placeholder = '', suffix = null, prefix = null, format, ...rest } = props;

  return (
    // @ts-ignore
    <DatePicker
      className={classNames('input-date', {
        inputText: !suffix && !prefix,
        [className]: !!className,
      })}
      placeholder={placeholder}
      suffixIcon={<Icon icon='icon-calendar' />}
      format={format}
      allowClear={false}
      showToday={false}
      inputReadOnly
      {...rest}
    />
  );
};

InputDate.displayName = 'InputDate';

export default InputDate;
