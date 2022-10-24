import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/Home';
import Cart from './views/Cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailBook from './views/DetailBook';
import { COLOURS } from './Coler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './views/Login';
import Register from './views/Register';

import { Provider } from 'react-redux';
import { store } from './redux/store';
// // import Count from './redux/screens/Count';
// // import Cart from './redux/screens/Cart';
import AllBooks from './views/AllBooks';
import CreateBook from './views/CreateBook';
import EditBook from './views/EditBook';

function HomeNavigatorScreen() {
  const HomeNavigator = createNativeStackNavigator();
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
    >
      <HomeNavigator.Screen name='Home' component={Home}
        options={{
          headerShown: false
        }} />
      <HomeNavigator.Screen name='DetailBook' component={DetailBook} />
      <HomeNavigator.Screen name="Cart" component={Cart} />
    </HomeNavigator.Navigator>
  );
}

function AdminBookNavigatorScreen() {
  const AdminBookNavigator = createNativeStackNavigator();
  return (
    <AdminBookNavigator.Navigator
      initialRouteName='AdminBook'
    >
      <AdminBookNavigator.Screen name='AllBooks' component={AllBooks}
        options={{
          headerShown: false
        }} />
      <AdminBookNavigator.Screen name='CreateBook' component={CreateBook} />
      <AdminBookNavigator.Screen name="EditBook" component={EditBook} />
    </AdminBookNavigator.Navigator>
  );
}

function MainNavigatorScreen() {
  const MainDrawer = createDrawerNavigator();
  return (
    <MainDrawer.Navigator
      initialRouteName='MainDrawer'
    >
      <MainDrawer.Screen name="HomeScreen" component={HomeNavigatorScreen}
        options={{
          title: 'Home',
        }}
      />
      <MainDrawer.Screen name="AdminBookScreen" component={AdminBookNavigatorScreen}
        options={{
          title: 'AdminBook',
        }}
      />
      <MainDrawer.Screen name="CartScreen" component={Cart}
        options={{
          title: 'Cart',
        }}
      />
    </MainDrawer.Navigator>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Tab.Navigator
      screenOptions={{
        headerShown:false
      }}
      >
        <Tab.Screen name="HomeScreen" component={HomeNavigatorScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="CartScreen" component={Cart} initialRouteName='Cart'
          options={{
            headerShown:true,
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color,size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          }}
        />
      </Tab.Navigator> */}
        {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#010101" translucent = {true}/> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // headerTitleAlign:'center'
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MainScreen" component={MainNavigatorScreen} />
          <Stack.Screen name="Cart" component={Cart}
            options={{
              headerTitleStyle: {
                fontSize: 26,
                color: COLOURS.black,
                fontWeight: 'bold',
              },
              headerTitle: 'Chi tiết hàng',
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: '#000',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
