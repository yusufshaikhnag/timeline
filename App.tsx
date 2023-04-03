import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator , {Header} from './TabNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <Header/>
      <TabNavigator />
      
    </NavigationContainer>
  );
};

export default App;
