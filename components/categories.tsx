//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Pressable } from 'react-native';


type Props={
    name?:string,
    icon?:any
}
// create a component
const Categories:React.FC<Props> = ({name,icon}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View>
          <Pressable 
          onPressIn={() => setIsFocused(true)}
          onPressOut={() => setIsFocused(false)}
          className={`h-[50px] w-[140px] flex flex-row justify-evenly items-center border border-primary rounded-lg ml-4 ${isFocused?'bg-primary':null} `}>
            <Text className={`text-xl ${isFocused?'text-white':null}`}>{icon}</Text>
            <Text className={`text-lg font-medium ${isFocused?'text-white':null}`}>{name}</Text>
        </Pressable>
        </View>
    );
};

//make this component available to the app
export default Categories;
