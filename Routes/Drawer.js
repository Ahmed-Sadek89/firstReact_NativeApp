// Tools
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
// Stacks
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return(
    <Drawer.Navigator drawerPosition= 'left'>
      <Drawer.Screen
        name="HomeStack" 
        component={HomeStack} 
        options={
          {
            title: 'Home'
          }
          }
      />

      <Drawer.Screen
        name="AboutStack" 
        component={AboutStack} 
        options={
          {
            title: 'About..'
          }
          }
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer