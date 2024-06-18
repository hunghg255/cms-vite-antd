// @ts-ignore
import React from 'react';

import classNames from 'classnames';

import { TColor } from '@/styles/color/color.variables';

import { Ticon } from '../../../../public/svgtocss/icon-type';

export const Icon = ({
  className = '',
  // @ts-ignore
  color = '',
  ...props
}: React.SVGProps<SVGSVGElement> & { icon: Ticon; className?: string; color?: TColor }) => {
  // @ts-ignore
  return <i className={classNames(props.icon, color, className)} {...props} />;
};
