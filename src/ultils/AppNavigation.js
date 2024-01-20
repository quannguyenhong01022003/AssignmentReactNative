import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import ListCart from '../screens/Cart/ListCart';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Stack = createNativeStackNavigator();
const Users = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    )

}

const Tab = createBottomTabNavigator();
const Main = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'home',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name="ListCart"
                component={ListCart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="shoppingcart" color={color} size={26} />
                    ),
                }}

            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="profile" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )

}

const AppNavigation = () => {


    return (
        <NavigationContainer>
            <Users />
        </NavigationContainer>

    )
}

export default AppNavigation