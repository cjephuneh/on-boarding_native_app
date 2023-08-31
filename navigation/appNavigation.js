import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';




const Stack = createStackNavigator();


export default function AppNavigation() {
return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name="Onboarding" options = {{headerShown: false}} component={OnboardingScreen} />
            <Stack.Screen name="Home" options = {{headerShown: false}} component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>

)
}

