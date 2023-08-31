import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';




export default function OnboardingScreen() {
    return (
        <View style={styles.container}>
           <Onboarding
                containerStyles={{paddingHorizontal: '#fff'}}
                pages={[
                    {
                    backgroundColor: '#fff',
                    image: (
                        <View>
                            <Text>Image 1</Text>
                        </View>
                    ),
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                    },

                    {
                        backgroundColor: '#fff',
                        image: (
                            <View>
                                <Text>Image 1</Text>
                            </View>
                        ),
                        title: 'Boost your productivity',
                        subtitle: 'Follow the steps to boost your productivity',
                    },

                    {
                        backgroundColor: '#fff',
                        image: (
                            <View>
                                <Text>Image 1</Text>
                            </View>
                        ),
                        title: 'work Smarter',
                        subtitle: 'work smarter not harder',
                    },
                    
                ]}
            />
        </View>
    );
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})