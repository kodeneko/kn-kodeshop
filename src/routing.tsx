import { Navigate } from 'react-router-dom';
import DashboardPage from './pages/dashboard/Dashboard.page';
import OrdersPage from './pages/orders/Orders.page';
import PrivateTemplate from './templates/private/Private.template';

export const routes = [
  {
    path: '/',
    element: <PrivateTemplate />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: 'orders',
        element: <OrdersPage />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
];