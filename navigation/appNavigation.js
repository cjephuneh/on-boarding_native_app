import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';




const Stack = createStackNavigator();


export default function AppNavigation() {
return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" options = {{headerShown: false}} component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>

)
}

