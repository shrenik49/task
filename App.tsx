import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './Components/MainScreen';
import AddScreen from './Components/AddScreen';
import {NavigationContainer} from '@react-navigation/native';
import Context from './Components/Context';
import EditScreen from './Components/EditScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          initialRouteName="MainScreen">
          <Stack.Screen
            name="MainScreen"
            options={{
              title: 'Main Screen',
            }}
            component={MainScreen}
          />
          <Stack.Screen
            name="SecondScreen"
            options={{
              title: 'Add new user',
            }}
            component={AddScreen}
          />
          <Stack.Screen name="EditScreen" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
}

export default App;
