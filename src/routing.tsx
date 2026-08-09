import { Navigate } from 'react-router-dom';
import DashboardPage from './pages/dashboard/Dashboard.page.tsx';
import OrdersPage from './pages/orders/Orders.page.tsx';
import PrivateTemplate from './templates/private/Private.template.tsx';

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