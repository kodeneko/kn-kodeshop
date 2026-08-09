import { Navigate } from 'react-router-dom';
import PublicTemplate from './templates/public/Public.template';
import DashboardPage from './pages/dashboard/Dashboard.page';
import OrdersPage from './pages/orders/Orders.page';

export const routes = [
  {
    path: '/',
    element: <PublicTemplate />,
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