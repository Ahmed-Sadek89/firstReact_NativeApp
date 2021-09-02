// Tools
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native'
// Screens
import Home from '../Screens/Home';
import ReviewDetails from '../Screens/ReviewDetails';
// components
import Header from '../Components/Header';


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
       name="HomeScreen" 
       component={Home} 
       options={({navigation}) =>{
         return{
          headerTitle: () => <Header navigation={navigation} title='home gameZone' /> ,
          headerBackground: () => <Image source={require('../assets/images/game_bg.png')} style={{height:80}}/>,
          headerTintColor: '#333',
          headerStyle:{
         } 
         }
       }}
      />
      <Stack.Screen
       name="ReviewDetails" 
       component={ReviewDetails} 
       options={
         { 
           title: 'Details', 
           headerTintColor: '#333',
           headerBackground: () => <Image source={require('../assets/images/game_bg.png')} style={{height:80}}/>,
           headerStyle:{
            } 
         }
        }
      />
    </Stack.Navigator>
  );
}
export default HomeStack