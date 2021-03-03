import React from 'react';
import AppProvider from './providers';

import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
