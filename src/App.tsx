import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routing';
import './i18n';
import './styles/global.css';

function AppRoutes() {
  const routeElements = useRoutes(routes);
  return routeElements;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;
