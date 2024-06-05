//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Formfield from "@/components/form_field";
import TabsComponent from "@/components/tabs";
import { restaurants } from "@/data/restaurants.data";
import Card from "@/components/shop_card";

// create a component
const Menu = () => {
  return (
    <ScrollView className="bg-white ">
      <SafeAreaView>
        <View className="flex flex-col items-center bg-white ">
          <View className=" flex flex-row w-[80%] justify-evenly  p-6 items-center ">
            <Text className="text-xl font-bold pl-24">Menu</Text>
            <TouchableOpacity className=" pl-6">
              <Feather name="bell" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <Text className="text-textGray pr-[280] pt-6 ">Our Food</Text>
          <Text className="text-2xl font-medium text-primary pr-[180px] pb-6">
            Special For You
          </Text>
          <Formfield icon={"search"} placeholder={"Search on SupaMenu"} />
        </View>
        <View className="flex justify-center items-center">
          <TabsComponent />
        </View>
        <View>
          <Text className="p-2 pt-6 ml-5 text-xl font-medium">
            Top all week
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingLeft: 13,
            }}
            data={restaurants}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Card product={item} />}
          />
        </View>
        <View>
          <Text className="p-2 ml-5 pt-6 text-xl font-medium">
            Best selling
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingLeft: 13,
            }}
            data={restaurants}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Card product={item} />}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default Menu;
