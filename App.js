// tools
import React, {useState} from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
// routes
import MyDrawer from './Routes/Drawer';
import { NavigationContainer } from '@react-navigation/native';

const getFonts = () =>  Font.loadAsync({
    'RobotoMono-Regular': require('./assets/fonts/static/RobotoMono-Regular.ttf'),
    'RobotoMono-Bold': require('./assets/fonts/static/RobotoMono-Bold.ttf'),
    'RobotoMono-Italic': require('./assets/fonts/static/RobotoMono-Italic.ttf'),
});

const App = () => {
  const [load, setLoad] = useState(false)

  if(load){
    console.log('true')
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoad(true ) }
        onError={console.warn}
      />
    )
  }
}


export default App
