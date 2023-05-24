import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Product from './Product';

const Drawer = createDrawerNavigator();

const stack = createStackNavigator();

const HomeNav = () => {
    return (
        <stack.Navigator initialRouteName='Home'>
            <stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <stack.Screen
                name='Product'
                component={Product}
                options={{ headerShown: false }}
            />
        </stack.Navigator>
    )
}

const Drawertab = () => {
    return (
        <Drawer.Navigator initialRouteName='HomeNav'>
            <Drawer.Screen name="HomeNav" component={HomeNav} />
        </Drawer.Navigator>
    )
}

export default Drawertab

const styles = StyleSheet.create({})