import { Text, View,StatusBar,TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './views/Home';
import DetailBook from './views/DetailBook';
import Cart from './views/Cart';
import { COLOURS } from './Coler';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App({ navigation }) {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#010101" translucent = {true}/>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
          headerTitleAlign:'center'
        }}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart}
         options={{
            headerTitleStyle: { 
                fontSize: 26,
                color: COLOURS.black,
                fontWeight: 'bold',
            },
            headerTitle:'Chi tiết hàng',
            headerStyle: {
              backgroundColor: "white",
              },
            headerTintColor: '#000',
        }} 
          />
        <Stack.Screen name="DetailBook" component={DetailBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
