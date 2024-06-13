//import libraries
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import Formfield from "@/components/form_field";
import { Feather } from "@expo/vector-icons";
import ButtonComponent from "@/components/button";
import { useNavigation } from "expo-router";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

// create a functional component
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "http://10.5.222.144:8000";

  const handleSignIn = async () => {
    try {
      const userData = {
        email: email,
        password: password,
      };
      const response = await axios.post(`${API_URL}/user/login`, userData);
      await SecureStore.setItemAsync("token", response.data.token);
      const token = await SecureStore.getItemAsync("token");
      console.log(token);

      console.log("Success", "You have signed up successfully!");
      router.push("landing-page");
      // Navigate to the login page
    } catch (error) {
      console.log("Error", "Failed to sign up. Please try again.");
      console.log(error);
    }
  };
  const navigation = useNavigation();
  const router = useRouter();
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
        <View className="pt-6">
          <Formfield
            icon={"mail"}
            value={email}
            placeholder={"Email"}
            handleChange={(e: string) => setEmail(e)}
          />
          <Formfield
            icon={"lock"}
            value={password}
            placeholder={"Enter your password"}
            handleChange={(pass: string) => setPassword(pass)}
            secureTextEntry={true}
          />
          <ButtonComponent
            name={"Sign In"}
            position="justify-center"
            color="bg-primary"
            textColor="text-white"
            onPress={handleSignIn}
          />
          <View className="flex-row items-center my-4">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-2 text-gray-500">OR</Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>
          <ButtonComponent
            name="Login with Google"
            icon={"google"}
            border="border-2 border-gray-300"
            textColor="text-textGray"
          />
          <ButtonComponent
            name="Login with facebook"
            icon={"facebook"}
            border="border-2 border-gray-300"
            textColor="text-textGray"
          />
        </View>
        <Text>
          Don't have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate("register/index")}
          >
            <Text className="pt-4 text-primary">Sign Up</Text>
          </TouchableOpacity>
        </Text>
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
export default SignIn;
