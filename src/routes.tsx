import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import BaseRoutes from './components/dummy/base/routes';
import ButtonRoutes from './components/dummy/buttons/routes';
import FormRoutes from './components/dummy/forms/routes';
import IconRoutes from './components/dummy/icons/routes';
import NotificationRoutes from './components/dummy/notifications/routes';
import ThemeRoutes from './components/dummy/theme/routes';
import AuthRoutes from './components/modules/auth/routes';

const Table = React.lazy(() => import('./components/dummy/Table'));

const Dashboard = React.lazy(() => import('./components/dummy/dashboard/Dashboard'));

const Charts = React.lazy(() => import('./components/dummy/charts/Charts'));
const Widgets = React.lazy(() => import('./components/dummy/widgets/Widgets'));
// Error pages

const Page404 = React.lazy(() => import('./components/modules/Page404'));
const Page500 = React.lazy(() => import('./components/modules/Page500'));
const Page403 = React.lazy(() => import('./components/modules/Page403'));

const DummyBackOfficeHome = () => <div>Back Office Home</div>;

const routes: RouteObject[] = [
  { path: '/', element: <DummyBackOfficeHome /> },
  { path: '/404', element: <Page404 /> },
  { path: '/500', element: <Page500 /> },
  { path: '/403', element: <Page403 /> },
  { path: '/auth/*', element: <AuthRoutes /> },
  { path: 'table', element: <Table /> },
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'theme/*', element: <ThemeRoutes /> },
  { path: 'base/*', element: <BaseRoutes /> },
  { path: 'buttons/*', element: <ButtonRoutes /> },
  { path: 'charts', element: <Charts /> },
  { path: 'forms/*', element: <FormRoutes /> },
  { path: 'icons/*', element: <IconRoutes /> },
  { path: 'notifications/*', element: <NotificationRoutes /> },
  { path: 'widgets', element: <Widgets /> },
  { path: '*', element: <Navigate to="/404" /> },
];

const RouteRender = () => useRoutes(routes);

// const BackOfficeRender = () => useRoutes(backOffice);

// const BackOfficeRender = () => {
//   const { location } = useRouter();

//   const { user } = useSelector((state: RootState) => state.authentication);

//   const routes = useRoutes(
//     Boolean(user)
//       ? backOffice
//       : [{ path: '*', element: <Navigate to="/auth/login" state={{ path: location.pathname }} /> }]
//   );
//   return routes;
// };

export { RouteRender, routes };

