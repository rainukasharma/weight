import React from 'react'
import NavigationDrawer from './NavigationDrawer';
import ZoneInformation from '../Pages/ZoneInformation';

const MainLayout = () => {
  return (
    <div className='flex flex-row'>
        <NavigationDrawer />
        <ZoneInformation/>
    </div>
  );
};

export default MainLayout;