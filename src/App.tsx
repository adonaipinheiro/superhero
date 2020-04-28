import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <HashRouter>
      <Routes />
    </HashRouter>
    <GlobalStyle />
  </>
);

export default App;
