import type { MainMenuOptInfo } from "./MainMenu/MainMenu.types"

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

export { mainMenuOpts };
