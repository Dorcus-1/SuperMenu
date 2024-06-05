import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import Formfield from "@/components/form_field";
import { Feather } from "@expo/vector-icons";
import ButtonComponent from "@/components/button";
import { useNavigation } from "expo-router";

// create a functional component
const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center bg-[#A01B2C]">
      <View className="h-[20%] w-full "></View>
      <View className="h-[80%] w-full flex-1 p-8 items-center bg-white rounded-t-3xl ">
        <Text className="text-4xl font-bold">
          SUPA<Text className="text-primary">MENU</Text>
        </Text>
        <Text className="text-base text-textGray p-2">Welcome...</Text>
        <Text className="text-textGray">
          Enter your credentials to continue
        </Text>
        <View className="pt-12">
          <Formfield icon={"user"} placeholder={"Full names"} />
          <Formfield icon={"phone"} placeholder={"Phone number"} />
          <Formfield icon={"lock"} placeholder={"Enter your password"} />
          <ButtonComponent
            name={"Sign Up"}
            position="justify-center"
            color="bg-primary"
            textColor="text-white"
          />
        </View>
        <View className="flex-row items-center my-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-2 text-gray-500">OR</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>
        <Text>
          Already have an account?
          <TouchableOpacity onPress={() => router.push('login')}>
            <Text className="pt-4 text-primary">Sign In</Text>
          </TouchableOpacity>
        </Text>
        <ButtonComponent
          name={"Sign Up"}
          position="justify-center"
          color="bg-primary"
          textColor="text-white"
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
export default SignUp;