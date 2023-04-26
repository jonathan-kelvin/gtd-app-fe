import React from 'react';
import LandingPage from './pages/LandingPage';
import AntConfig from './styles/AntConfig';

const App: React.FC = () => {
  return (
    <AntConfig>
      <LandingPage />
    </AntConfig>
  );
};

export default App;
