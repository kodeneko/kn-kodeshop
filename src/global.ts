import type { UserBarOptInfo } from "./components";
import type { MainMenuOptInfo } from "./components/main-menu/MainMenu.types"

const mainMenuOptDashboard: MainMenuOptInfo = {
  id: 'dashboard',
  pic: 'sqrs'
};
const mainMenuOptOrders: MainMenuOptInfo = {
  id: 'orders',
  pic: 'package'
};
const mainMenuOptProducts: MainMenuOptInfo = {
  id: 'products',
  pic: 'tshirt'
};
const mainMenuOptCustomers: MainMenuOptInfo = {
  id: 'customers',
  pic: 'userGroup'
};
const mainMenuOptReports: MainMenuOptInfo = {
  id: 'reports',
  pic: 'file'
};
const mainMenuOptConfig: MainMenuOptInfo = {
  id: 'config',
  pic: 'tools'
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

export { mainMenuOpts, userBarOpts };
