import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/map_screen';
const Stack = createStackNavigator();

const WholeStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='map'
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default WholeStack;
