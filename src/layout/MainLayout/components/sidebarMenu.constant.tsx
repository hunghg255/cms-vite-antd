// import React from 'react';

// import type { MenuProps } from 'antd';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// import IconAccountInfo from '@/components/UI/IconJSX/IconAccountInfo';
// import IconAccountManager from '@/components/UI/IconJSX/IconAccountManager';
// import IconBook from '@/components/UI/IconJSX/IconBook';
// import IconCourse from '@/components/UI/IconJSX/IconCourse';
// // import IconCube from '@/components/UI/IconJSX/IconCube';
// import IconDashBoard from '@/components/UI/IconJSX/IconDashboard';
// import IconLeaderManager from '@/components/UI/IconJSX/IconLeaderManager';
// // import IconOther from '@/components/UI/IconJSX/IconOther';
// // import IconSettingSystem from '@/components/UI/IconJSX/IconSettingSystem';
// import IconOther from '@/components/UI/IconJSX/IconOther';
// import IconSettingSystem from '@/components/UI/IconJSX/IconSettingSystem';
// import IconSettingSystemSwitch from '@/components/UI/IconJSX/IconSettingSystemSwitch';
// import IconUserGroup from '@/components/UI/IconJSX/IconUserGroup';
// import { ROUTE_PATH } from '@/routes/route.constant';
// import { TPermissions } from '@/store/permissions/type';
// import { useMyPermissions } from '@/store/permissions/usePermissions';

// type MenuItem = Required<MenuProps>['items'][number];

// type TRouteSidebar = Array<{
//   id: string;
//   title: string;
//   icon: () => any;
//   children: Array<{
//     id: string;
//     title: string;
//     href: string;
//     permision?: TPermissions;
//   }>;
// }>;

// const ROUTE_SIDEBAR: TRouteSidebar = [
//   {
//     id: 'sub1',
//     title: 'Tổng quan',
//     icon: IconDashBoard,
//     children: [
//       {
//         id: 'sub1-1',
//         title: 'Báo cáo - Thống kê',
//         href: ROUTE_PATH.DASHBOARD,
//         permision: 'statistical_reports',
//       },
//     ],
//   },
//   {
//     id: 'sub2',
//     title: 'Quản trị sách',
//     icon: IconBook,
//     children: [
//       {
//         id: 'sub2-1',
//         title: 'Thể loại sách',
//         href: ROUTE_PATH.BOOK_CATEGORY,
//         permision: 'view_book_category',
//       },
//       {
//         id: 'sub2-2',
//         title: 'Nhãn nội dung sách',
//         href: ROUTE_PATH.BOOK_LABEL,
//         permision: 'view_label',
//       },
//       {
//         id: 'sub2-3',
//         title: 'Từ khóa tìm kiếm',
//         href: ROUTE_PATH.BOOK_KEYWORD,
//         permision: 'view_book_keyword',
//       },
//       {
//         id: 'sub2-4',
//         title: 'Hồ sơ thông tin sách thông thường',
//         href: ROUTE_PATH.BOOK_METADATA,
//         permision: 'view_book_metadata',
//       },
//       {
//         id: 'sub2-5',
//         title: 'Hồ sơ thông tin sách đa phương tiện',
//         href: ROUTE_PATH.BOOK_3D_METADATA,
//         permision: 'view_book_3d_metadata',
//       },
//       {
//         id: 'sub2-6',
//         title: 'Hồ sơ thông tin sách nói',
//         href: ROUTE_PATH.BOOK_AUDIO,
//         permision: 'view_book_audio_metadata',
//       },

//       // {
//       //   id: 'sub2-6',
//       //   title: 'Đội ngũ biên tập sách',
//       //   href: ROUTE_PATH.BOOK_AUTHOR,
//       // },
//       // {
//       //   id: 'sub2-7',
//       //   title: 'Lịch sử biên tập',
//       //   href: 'ROUTE_PATH.BOOK_AUTHOR',
//       // },
//     ],
//   },
//   // {
//   //   id: 'sub3',
//   //   title: 'Quản trị sách 3D',
//   //   icon: IconCube,
//   //   children: [
//   //     {
//   //       id: 'sub3-1',
//   //       title: 'Hồ sơ thông tin sách 3D',
//   //       href: ROUTE_PATH.BOOK_CATEGORY,
//   //     },
//   //   ],
//   // },
//   {
//     id: 'sub4',
//     title: 'Quản trị báo điện tử',
//     icon: IconCourse,
//     children: [
//       {
//         id: 'sub4-1',
//         title: 'Phân loại báo điện tử',
//         href: ROUTE_PATH.NEWSPAPER_CATEGORY,
//         permision: 'view_newspaper_category',
//       },
//       {
//         id: 'sub4-2',
//         title: 'Từ khóa bài báo',
//         href: ROUTE_PATH.NEWSPAPER_KEYWORD,
//         permision: 'view_newspaper_keyword',
//       },
//       {
//         id: 'sub4-3',
//         title: 'Bài báo điện tử',
//         href: ROUTE_PATH.NEWSPAPER,
//         permision: 'view_newspaper',
//       },
//       {
//         id: 'sub4-4',
//         title: 'Tin tức',
//         href: ROUTE_PATH.NEWS,
//         permision: 'view_news',
//       },
//       {
//         id: 'sub4-5',
//         title: 'Bài báo Infographic',
//         href: ROUTE_PATH.NEWSPAPER_INFOGRAPHIC,
//         permision: 'view_infographic',
//       },
//       {
//         id: 'sub4-6',
//         title: 'Bài báo Timeline',
//         href: ROUTE_PATH.NEWSPAPER_TIMELINE,
//         permision: 'view_timeline',
//       },
//       {
//         id: 'sub4-7',
//         title: 'Bài báo Mega Story',
//         href: ROUTE_PATH.NEWSPAPER_MEGA_STORY,
//         permision: 'view_mega_story',
//       },
//     ],
//   },
//   {
//     id: 'sub5',
//     title: 'Quản trị hồ sơ',
//     icon: IconLeaderManager,
//     children: [
//       {
//         id: 'sub5-1',
//         title: 'Tác giả',
//         href: ROUTE_PATH.BOOK_AUTHOR,
//         permision: 'view_author',
//       },
//       {
//         id: 'sub5-2',
//         title: 'Nhà xuất bản',
//         href: ROUTE_PATH.PUBLISHER,
//         permision: 'view_publisher',
//       },
//       {
//         id: 'sub5-3',
//         title: 'Đơn vị báo điện tử',
//         href: ROUTE_PATH.NEWSPAPER_ORGANIZATION,
//         permision: 'view_newspaper_organization',
//       },
//     ],
//   },
//   {
//     id: 'sub6',
//     title: 'Quản trị bạn đọc',
//     icon: IconUserGroup,
//     children: [
//       {
//         id: 'sub6-1',
//         title: 'Bạn đọc',
//         href: ROUTE_PATH.READER,
//         permision: 'view_reader',
//       },
//       {
//         id: 'sub6-2',
//         title: 'Nhóm bạn đọc',
//         href: ROUTE_PATH.READER_GROUP,
//         permision: 'view_reader',
//       },
//       {
//         id: 'sub6-3',
//         title: 'Trình đọc sách',
//         href: ROUTE_PATH.READER_CONFIG,
//         permision: 'update_epub_reader_config',
//       },
//     ],
//   },
//   {
//     id: 'sub7',
//     title: 'Quản trị tài khoản và phân quyền',
//     icon: IconAccountManager,
//     children: [
//       {
//         id: 'sub7-1',
//         title: 'Tài khoản',
//         href: ROUTE_PATH.LIST_ACCOUNTS,
//         permision: 'view_user',
//       },
//       {
//         id: 'sub7-2',
//         title: 'Nhóm quyền',
//         href: ROUTE_PATH.PERMISSION_MANAGEMENT,
//         permision: 'view_permission_group',
//       },
//     ],
//   },
//   {
//     id: 'sub8',
//     title: 'Cấu hình cổng thông tin',
//     icon: IconSettingSystem,
//     children: [
//       {
//         id: 'sub8-1',
//         title: 'Trang chủ',
//         href: ROUTE_PATH.CONFIG_HOME,
//         permision: 'homepage_config',
//       },
//       {
//         id: 'sub8-2',
//         title: 'Trang chủ (/home-beta)',
//         href: ROUTE_PATH.CONFIG_HOME_BETA,
//         permision: 'homepage_config',
//       },
//     ],
//   },
//   {
//     id: 'sub9',
//     title: 'Thiết lập hệ thống',
//     icon: IconSettingSystemSwitch,
//     children: [
//       {
//         id: 'sub9-1',
//         title: 'Chính sách mật khẩu',
//         href: ROUTE_PATH.PASSWORD_POLICY,
//         permision: 'view_password_policy',
//       },
//       {
//         id: 'sub9-2',
//         title: 'Kiểm soát truy cập',
//         href: ROUTE_PATH.CHECK_ACCESS,
//         permision: 'check_access',
//       },
//     ],
//   },
//   // {
//   //   id: 'sub7',
//   //   title: 'Công cụ biên tập',
//   //   icon: IconEdit,
//   //   children: [
//   //     {
//   //       id: 'sub7-1',
//   //       title: 'Công cụ biên tập sách điện tử',
//   //       href: ROUTE_PATH.BOOK_CATEGORY,
//   //     },
//   //     {
//   //       id: 'sub7-2',
//   //       title: 'Công cụ biên tập ấn bản điện tử',
//   //       href: ROUTE_PATH.BOOK_CATEGORY,
//   //     },
//   //     {
//   //       id: 'sub7-3',
//   //       title: 'Công cụ tùy chỉnh dữ liệu font chữ',
//   //       href: ROUTE_PATH.BOOK_CATEGORY,
//   //     },
//   //     {
//   //       id: 'sub7-4',
//   //       title: 'Công cụ tùy chỉnh giao diện ấn bản',
//   //       href: ROUTE_PATH.BOOK_CATEGORY,
//   //     },
//   //     {
//   //       id: 'sub7-5',
//   //       title: 'Công cụ biên tập sách 3D',
//   //       href: ROUTE_PATH.BOOK_CATEGORY,
//   //     },
//   //     {
//   //       id: 'sub7-6',
//   //       title: 'Công cụ biên tập bài báo điện tử',
//   //       href: ROUTE_PATH.BOOK_CATEGORY,
//   //     },
//   //   ],
//   // },
//   {
//     id: 'sub10',
//     title: 'Khác',
//     icon: IconOther,
//     children: [
//       {
//         id: 'sub10-1',
//         title: 'Lịch sử hoạt động',
//         href: ROUTE_PATH.HISTORY_ACTIVITIES,
//         permision: 'activity_history',
//       },
//       // {
//       //   id: 'sub8-2',
//       //   title: 'Xác thực',
//       //   href: ROUTE_PATH.BOOK_CATEGORY,
//       // },
//       // {
//       //   id: 'sub8-3',
//       //   title: 'Kiểm soát truy cập',
//       //   href: ROUTE_PATH.BOOK_CATEGORY,
//       // },
//       {
//         id: 'sub10-4',
//         title: 'Nhật ký hệ thống',
//         href: ROUTE_PATH.HISTORY_SYSTEM_DIARIES,
//         permision: 'system_diary',
//       },
//     ],
//   },
//   {
//     id: 'sub11',
//     title: 'Thông tin tài khoản',
//     icon: IconAccountInfo,
//     children: [
//       {
//         id: 'sub11-1',
//         title: 'Thông tin cá nhân',
//         href: ROUTE_PATH.ACCOUNT_INFO,
//       },
//       {
//         id: 'sub11-2',
//         title: 'Mật khẩu',
//         href: ROUTE_PATH.ACCOUNT_PASSWORD,
//       },
//     ],
//   },
// ];

// function getItem(
//   label: string | React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group',
//   permision?: TPermissions,
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//     className: `menu-item-${key}`,
//     permision,
//   } as MenuItem;
// }

// export const useFormatSidebar = () => {
//   const { checkPermission } = useMyPermissions();
//   return ROUTE_SIDEBAR.map((it) => {
//     const children = it.children.filter((child) => checkPermission(child.permision));
//     return {
//       ...it,
//       children,
//     };
//   }).filter((it) => it.children.length > 0);
// };

// export const useSidebarActive = () => {
//   const location = useLocation();
//   const pathName = `/${location.pathname?.split('/')[1]}`;
//   const navigate = useNavigate();
//   const { checkPermission } = useMyPermissions();
//   const formatSidebar = useFormatSidebar();

//   const defaultOpenKeys = formatSidebar.find((item) => {
//     return item?.children.find((child) => {
//       return child.href === pathName;
//     });
//   });

//   const defaultSelectedKeys = defaultOpenKeys?.children.find((item) => {
//     return item.href === pathName;
//   });

//   const sidebarItems: MenuItem[] = ROUTE_SIDEBAR.map((item) => {
//     const child = item.children
//       .map((child) => {
//         // refresh same router
//         return getItem(
//           <Link
//             to={child.href || '/'}
//             onClick={(e) => {
//               e.preventDefault();
//               navigate(child.href || '/', { state: Math.random() });
//             }}
//           >
//             {child.title}
//           </Link>,
//           child.id,
//           undefined,
//           undefined,
//           undefined,
//           child.permision,
//         );
//       })
//       .filter((v: any) => checkPermission(v?.permision));

//     const C = item.icon;

//     return getItem(
//       item.title,
//       item.id,
//       <span>
//         <C />
//       </span>,
//       child,
//       undefined,
//       undefined,
//     );
//   })?.filter((it: any) => it?.children?.length > 0);

//   return {
//     sidebarItems,
//     defaultOpenKeys: defaultOpenKeys?.id ? [defaultOpenKeys.id] : [],
//     defaultSelectedKeys: defaultSelectedKeys?.id ? [defaultSelectedKeys.id] : [],
//   };
// };
export default {}
