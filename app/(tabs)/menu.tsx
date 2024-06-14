import React, { Component, useEffect, useState } from "react";
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
import axios from "axios";

// create a component
const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [topDishes, setTopDishes] = useState<any>([]);
  const [bestSellingDishes, setBestSellingDishes] = useState<any>([]);
  const [dishes, setDishes] = useState<any>([]);
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = ["All", "Featured", "Top of Week", "Soup", "Seafood"];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://10.5.222.144:8000/menu/all"); // Replace with your backend URL
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    // const fetchBestSellingDishes = async () => {
    //   try {
    //     const response = await axios.get("http://10.5.222.144:8000/dish/cheese"); // Replace with your backend URL
    //     setBestSellingDishes(response.data.dishes);
    //     console.log("==============")

    //   } catch (error) {
    //     console.error("Error fetching categories:", error);
    //   }
    // };
    // const fetchTopDishes = async () => {
    //   try {
    //     const response = await axios.get("http://10.5.222.144:8000/dish/chicken"); // Replace with your backend URL
    //     setTopDishes(response.data.dishes);
    //     console.log("==============")

    //   } catch (error) {
    //     console.error("Error fetching categories:", error);
    //   }
    // };

    // fetchTopDishes();

    // fetchBestSellingDishes();

    fetchCategories();
  }, []);

  const selectedTabFetch = async (e: any) => {
    setSelectedTab(e);
    console.log(e);
    try {
      const response = await axios.get(
        "http://10.5.222.144:8000/dish/menu/" + e
      );
      setTopDishes(response.data.dishes);
      console.log(topDishes); // Replace with your backend URLme
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

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
          <View className="flex flex-row justify-between  p-4  items-center">
            {categories.map((tab:any) => (
              <TouchableOpacity
                key={tab?.id}
                onPress={() => selectedTabFetch(tab.id)}
                className="mr-4"
              >
                <Text
                  className={`text-base ${
                    selectedTab === tab.id
                      ? "text-black font-bold"
                      : "text-gray-500"
                  } `}
                >
                  {tab.name}
                </Text>
                {selectedTab === tab.id && (
                  <View className="h-1 bg-primary mt-1" />
                )}
              </TouchableOpacity>
            ))}
          </View>
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
            data={topDishes}
            keyExtractor={(item: any) => item?.id.toString()}
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
            data={bestSellingDishes}
            keyExtractor={(item: any) => item?.id.toString()}
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
