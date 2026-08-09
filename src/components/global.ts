import type { MainMenuOpt } from "./MainMenu/MainMenu.types"

const mainMenuOptDashboard: MainMenuOpt = {
  id: 'dashboard',
  pic: 'sqrs'
};
const mainMenuOptOrders: MainMenuOpt = {
  id: 'orders',
  pic: 'package'
};
const mainMenuOptProducts: MainMenuOpt = {
  id: 'products',
  pic: 'tshirt'
};
const mainMenuOptCustomers: MainMenuOpt = {
  id: 'customers',
  pic: 'userGroup'
};
const mainMenuOptReports: MainMenuOpt = {
  id: 'reports',
  pic: 'file'
};
const mainMenuOptConfig: MainMenuOpt = {
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
