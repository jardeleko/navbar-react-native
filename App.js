import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import React from 'react'
import Home from './pages/Home'
import Details from './pages/Details'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CustomNavigationBar from './components/AppBar'
import { Provider } from 'react-native-paper'
const Stack = createStackNavigator()

export default function App() {
  return (
  <Provider>  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
