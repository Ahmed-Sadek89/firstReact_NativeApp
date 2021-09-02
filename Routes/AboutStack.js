// Tools
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Image} from 'react-native'
// Screens
import About from '../Screens/About';
// components
import Header from '../Components/Header';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
       name="About" 
       component={About} 
       options={({navigation}) =>{
        return{
         //title: 'gameZone',
         headerTitle: () => <Header navigation={navigation} title='Aboute gameZone' /> ,
         headerBackground: () => <Image source={require('../assets/images/game_bg.png')} style={{height:80}}/>,
         headerTintColor: '#333',
         
        }
      }}
         />
    </Stack.Navigator>
  );
}
export default AboutStack