import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/map_screen';
import ContactView from './screens/Contact_view';
import BottomNav from './screens/bot_nav';
const Stack = createStackNavigator();

const WholeStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='map'
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='tap'
        component={BottomNav}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name='contact'
        component={ContactView}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default WholeStack;
