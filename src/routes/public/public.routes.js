import { lazy } from 'react';

const LoginModule = lazy(() =>
  import('../../modules/Login'),
);
const HomeModule = lazy(() =>
  import('../../modules/Home'),
);
const RegistrationModule = lazy(() =>
  import('../../modules/Registration'),
);
const DoctorRegistrationModule = lazy(() =>
  import('../../modules/Doctor/Registration'),
);

const publicRoutes = [
  {
    id: '/',
    path: '/',
    component: HomeModule,
    exact: true,
  },
  {
    id: 'loginModule',
    path: '/Login',
    component: LoginModule,
    exact: true,
  },
  {
    id: 'DoctorRegistrationModule',
    path: '/MDRegistration',
    component: DoctorRegistrationModule,
    exact: true,
  },
];

export default publicRoutes;
