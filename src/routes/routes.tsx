import React, { Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layout/AppLayout/AppLayout';
import AuthLayout from '@/layout/AuthLayout/AuthLayout';
import MainLayout from '@/layout/MainLayout/MainLayout';

import { ROUTE_PATH } from './route.constant';

const SignIn = React.lazy(() => import('@/pages/SignIn/SignIn'));
const ForgotPassword = React.lazy(() => import('@/pages/ForgotPassword/ForgotPassword'));

const BranchPage = React.lazy(() => import('@/pages/BranchPage/BranchPage'));
const HotelPage = React.lazy(() => import('@/pages/HotelPage/HotelPage'));
const RoomClassPage = React.lazy(() => import('@/pages/RoomClassPage/RoomClassPage'));
const ConvenientPage = React.lazy(() => import('@/pages/ConvenientPage/ConvenientPage'));
const ServicesPage = React.lazy(() => import('@/pages/ServicesPage/ServicesPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTE_PATH.SIGN_IN,
            element: (
              <Suspense fallback={undefined}>
                <SignIn />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.FORGOT_PASSWORD,
            element: (
              <Suspense fallback={undefined}>
                <ForgotPassword />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTE_PATH.BRANCH,
            element: (
              <Suspense fallback={undefined}>
                <BranchPage />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.HOTEL,
            element: (
              <Suspense fallback={undefined}>
                <HotelPage />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.ROOM_CLASS,
            element: (
              <Suspense fallback={undefined}>
                <RoomClassPage />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.CONVENIENT,
            element: (
              <Suspense fallback={undefined}>
                <ConvenientPage />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.SERVICES,
            element: (
              <Suspense fallback={undefined}>
                <ServicesPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
