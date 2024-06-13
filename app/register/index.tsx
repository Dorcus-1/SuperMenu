import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link, router } from "expo-router";
import Formfield from "@/components/form_field";
import { Feather } from "@expo/vector-icons";
import ButtonComponent from "@/components/button";
import { useNavigation } from "expo-router";
import axios from "axios";

// create a functional component
const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "http://10.5.222.144:8000"; // Adjust this to your backend URL

  const handleSignUp = async () => {
    try {
      const userData = {
        fullnames: fullName,
        email: email,
        password: password,
        phone:phone,
      };

      const response = await axios.post(`${API_URL}/user/create`, userData);
      console.log("here");

      console.log(response);
      console.log("Success", "You have signed up successfully!");
      router.push("login");
      // Navigate to the login page
    } catch (error) {
      console.log("Error", "Failed to sign up. Please try again.");
      console.log(error);
    }
  };
  const handleEmailChange = (text: string) => {
    setFullName(text);
  };

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
          <Formfield
            value={fullName}
            icon={"user"}
            placeholder={"Full names"}
            handleChange={handleEmailChange}
          />
          <Formfield
            icon={"mail"}
            value={email}
            placeholder={"Email"}
            handleChange={(e: string) => setEmail(e)}
          />
          <Formfield
            icon={"phone"}
            value={phone}
            placeholder={"Phone number"}
            handleChange={(e: string) => setPhone(e)}
          />
          <Formfield
            icon={"lock"}
            value={password}
            placeholder={"Enter your password"}
            handleChange={(pass: string) => setPassword(pass)}
            secureTextEntry={true}
          />
          <ButtonComponent
            name={"Sign Up"}
            position="justify-center"
            color="bg-primary"
            textColor="text-white"
            onPress={handleSignUp}
          />
        </View>
        <View className="flex-row items-center my-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-2 text-gray-500">OR</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>
        <Text>
          Already have an account?
          <TouchableOpacity onPress={() => router.push("login")}>
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
