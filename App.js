import { StyleSheet, Text, View } from 'react-native';
import WholeStack from './stack';
import Nav from './tab';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default function App() {
  return (
    <NavigationContainer>
      <WholeStack />
    </NavigationContainer>,
    <NavigationContainer>
      <Nav/>
    </NavigationContainer>
  );
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
