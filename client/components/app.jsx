import React, { useState } from 'react';
import Home from './home.jsx';

const App = () => {
  const changeApp = newApp => setApp(newApp);
  const [app, setApp] = useState(<Home changeApp={changeApp} />);
  return app;
};

export default App;
