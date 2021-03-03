import { lazy } from 'react';

const HomeModule = lazy(() =>
  import('../../modules/Home'),
);
const AddedListModule = lazy(() =>
  import('../../modules/AddedList'),
);
const DashboardModule = lazy(() =>
  import('../../modules/Doctor/Dashboard'),
);
const ScheduleModule = lazy(() =>
  import('../../modules/Doctor/Schedule'),
);

const privateRoutes = [
  {
    id: 'DashboardModule',
    path: '/doctor/dashboard',
    component: DashboardModule,
    exact: true,
  },
  {
    id: 'ScheduleModule',
    path: '/doctor/schedule',
    component: ScheduleModule,
    exact: true,
  },
  {
    id: 'homeModule',
    path: '/home',
    component: HomeModule,
    exact: true,
  },
  {
    id: 'AddedListModule',
    path: '/added',
    component: AddedListModule,
    exact: true,
  },
];

export default privateRoutes;
