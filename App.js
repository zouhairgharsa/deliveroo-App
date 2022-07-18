import * as React from 'react';

import { HomeScreen, RestaurantScreen, BasketScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={{ colors: { background: 'white' } }}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Restaurant" component={RestaurantScreen} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="Basket" component={BasketScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
