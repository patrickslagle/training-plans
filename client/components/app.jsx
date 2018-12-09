import React, { useState } from 'react';
import Home from './home.jsx';
import ChangeAppContext from './change-app-context.jsx';

const App = () => {
  const [app, setApp] = useState(<Home />);
  const changeApp = newApp => setApp(newApp);
  return (
    <ChangeAppContext.Provider value={changeApp}>
      {app}
    </ChangeAppContext.Provider>
  );
};

export default App;
