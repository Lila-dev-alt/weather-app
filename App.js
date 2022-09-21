import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import {useEffect} from "react";
import {useState} from "react";
import ShowMeteo from "./ShowMeteo";
import Datetime from "./Datetime";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function App() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                            } else if (route.name === 'Search') {
                                iconName = focused ? 'ios-search' : 'ios-search-outline';
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'teal',
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Search" component={SearchScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
}

