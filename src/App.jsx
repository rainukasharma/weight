import React, { useState } from 'react';
import NavigationDrawer from './Components/NavigationDrawer';
import ZoneInformation from './Pages/ZoneInformation';
import LoginPage from './Pages/LoginPage';
import MainLayout from './Components/MainLayout';
import UserInformation from './Pages/UserInformation';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='flex flex-row'>
      {isLoggedIn ? (
        <>
          <UserInformation />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
