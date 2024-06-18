import React from 'react';

import { Icon } from '@/components/UI/IconFont/Icon';
import { ROUTE_PATH } from '@/routes/route.constant';

type TRouteSidebar = Array<{
  id: string;
  title: string;
  href?: string;
  icon: () => any;
}>;

export const ROUTE_SIDEBAR: TRouteSidebar = [
  {
    id: 'sub1',
    title: 'Chi nhánh',
    href: ROUTE_PATH.BRANCH,
    icon: () => <Icon icon='icon-location' className='text-[24px] text-white' />,
  },
  {
    id: 'sub2',
    title: 'Khách sạn',
    href: ROUTE_PATH.HOTEL,
    icon: () => <Icon icon='icon-buildings-2' className='text-[24px] text-white' />,
  },
  {
    id: 'sub3',
    title: 'Hạng phòng',
    href: ROUTE_PATH.ROOM_CLASS,
    icon: () => <Icon icon='icon-sleeping' className='text-[24px] text-white' />,
  },
  {
    id: 'sub4',
    title: 'Tiện ích',
    href: ROUTE_PATH.CONVENIENT,
    icon: () => <Icon icon='icon-amentities' className='text-[24px] text-white' />,
  },
  {
    id: 'sub5',
    title: 'Dịch vụ',
    href: ROUTE_PATH.SERVICES,
    icon: () => <Icon icon='icon-service' className='text-[24px] text-white' />,
  },
];
