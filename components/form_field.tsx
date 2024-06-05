//import liraries
import { Feather } from "@expo/vector-icons";
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
type Props={
    label?:string
    value?:any
    onChangeText?:any
    placeholder?:string
    secureTextEntry?:boolean
    icon?:any
    
}

// create a component
const Formfield:React.FC<Props> = ({ label, value, onChangeText, placeholder, secureTextEntry = false,icon }) => {
  return (
    <View className="justify-center items-center mb-4 ">
    {label && <Text className="self-start mb-2">{label}</Text>}
    <View className="flex-row items-center w-[80vw] border-2 border-gray-300 rounded h-[50px] px-2">
        
      {icon?<Feather name={icon} size={20} color="gray" className="mr-2 " />:<></>}
      <TextInput
        className="flex-1 text-black p-6"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={secureTextEntry}
      />
    </View>
  </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Formfield;
