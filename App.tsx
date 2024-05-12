import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import FlashMessage from 'react-native-flash-message';
import './src/config/Firebase';
// >>>>>>> 2e5cb4a1accebb7314377a7dc279f387e1c4334d

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
