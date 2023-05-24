import { StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Categories from '../../screens/Categories';
import Cart from '../../screens/Cart';
import User from '../../screens/User';
import Drawertab from './Drawertab';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomePage'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomePage') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name='HomePage' component={Drawertab} options={{ headerShown: false }} />
      <Tab.Screen name='Categories' component={Categories} />
      <Tab.Screen name='Cart' component={Cart} />
      <Tab.Screen name='User' component={User} />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({})