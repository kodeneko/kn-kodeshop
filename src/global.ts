import type { UserBarOptInfo } from "./components";
import type { MainMenuOptInfo } from "./components/main-menu/MainMenu.types"

const paths = {
  dashboard: '/dashboard',
  orders: '/orders',
  products: '/products',
  customers: '/customers',
  reports: '/reports',
  config: '/config'
};

const mainMenuOptDashboard: MainMenuOptInfo = {
  id: 'dashboard',
  pic: 'sqrs',
  path: paths.dashboard
};
const mainMenuOptOrders: MainMenuOptInfo = {
  id: 'orders',
  pic: 'package',
  path: paths.orders
};
const mainMenuOptProducts: MainMenuOptInfo = {
  id: 'products',
  pic: 'tshirt',
  path: paths.products
};
const mainMenuOptCustomers: MainMenuOptInfo = {
  id: 'customers',
  pic: 'userGroup',
  path: paths.customers
};
const mainMenuOptReports: MainMenuOptInfo = {
  id: 'reports',
  pic: 'file',
  path: paths.reports
};
const mainMenuOptConfig: MainMenuOptInfo = {
  id: 'config',
  pic: 'tools',
  path: paths.config
};
const mainMenuOpts = [
  mainMenuOptDashboard,
  mainMenuOptOrders,
  mainMenuOptProducts,
  mainMenuOptCustomers,
  mainMenuOptReports,
  mainMenuOptConfig
];

const userBarOptNoti: UserBarOptInfo = { id: 'noti', pic: 'bell' };
const userBarOptLogout: UserBarOptInfo = { id: 'logout', pic: 'goout' };
const userBarOpts = [userBarOptNoti, userBarOptLogout];

export { paths, mainMenuOpts, userBarOpts };
