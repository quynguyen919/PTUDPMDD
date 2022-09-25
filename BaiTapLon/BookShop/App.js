import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/Home';
import Cart from './views/Cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailBook from './views/DetailBook';
import { COLOURS } from './Coler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function HomeNavigatorScreen() {
  const HomeNavigator = createNativeStackNavigator();
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'>
      <HomeNavigator.Screen name='Home' component={Home} />
      <HomeNavigator.Screen name='DetailBook' component={DetailBook} />
    </HomeNavigator.Navigator>
  );
}

export default function App({ navigation }) {
  // const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator> */}
      <Drawer.Navigator >
        <Drawer.Screen name="HomeScreen" component={HomeNavigatorScreen} 
        options={{
          title: 'Home', 
        }}
        />
        <Drawer.Screen name="CartScreen" component={Cart} 
        options={{
          title: 'Cart',
        }}
        />
      </Drawer.Navigator>
      {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#010101" translucent = {true}/>
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
