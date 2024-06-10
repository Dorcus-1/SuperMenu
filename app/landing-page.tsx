//import liraries
import images from '@/assets/constants/images';
import ButtonComponent from '@/components/button';
import { router, useNavigation } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// create a component
const LandingPage = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ImageBackground 
            source={images.LandImage}
            className='w-full h-full flex-1 justify-end items-center'
            >
                <View className='bg-white h-[40%] w-[90%] rounded-md items-center justify-evenly ' >
                    <Text className='font-bold text-2xl'>Order your favs now !</Text>
                    <Text className='text-center leading-[25px] font-medium text-base w-[95%]'  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati corrupti sunt veritatis illo veniam nihil maxime nesciunt😋</Text>
                <ButtonComponent
                   name={"Continue..."}
                   position="justify-center"
                   color="bg-primary"
                   textColor="text-white" 
                   onPress={() => router.push('(tabs)')}
                   
                  />
                </View>

            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

//make this component available to the app
export default LandingPage;
