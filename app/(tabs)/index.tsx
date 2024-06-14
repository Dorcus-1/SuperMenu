import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Platform,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "@/components/header";
import DeliveryCard from "@/components/delivery_card";
import PromotionCard from "@/components/promotion_card";
import { restaurants } from "@/data/restaurants.data";
import Card from "@/components/shop_card";
import Categories from "@/components/categories";

import axios from "axios";

export default function HomeScreen() {
  const [categories, setCategories] = useState([]);
  const [topDishes, setTopDishes] = useState<any>([]);
  const[bestSellingDishes,setBestSellingDishes]=useState<any>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://10.5.222.144:8000/menu/all"); // Replace with your backend URL
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchTopDishes = async () => {
      try {
        const response = await axios.get("http://10.5.222.144:8000/dish/chicken"); // Replace with your backend URL
        setTopDishes(response.data.dishes);
        console.log("==============")
       
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchTopDishes();
  }, []);
  
  useEffect(() => {
    const fetchBestSellingDishes = async () => {
      try {
        const response = await axios.get("http://10.5.222.144:8000/dish/cheese"); // Replace with your backend URL
        setBestSellingDishes(response.data.dishes);
        console.log("==============")
        
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchBestSellingDishes();
  }, []);

  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="">
        <Header />
      </View>
      <View className="p-2">
        <DeliveryCard />
      </View>
      <View className="p-2 mt-[-30px]">
        <PromotionCard />
      </View>

      <View>
        <Text className="p-2 ml-5 pb-6 text-xl font-medium">Categories</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 12,
          }}
          data={categories}
          keyExtractor={(item: any) => item?.id.toString()}
          renderItem={({ item }) => <Categories name={item.name}  />}
        />
      </View>
      <View>
        <Text className="p-2 pt-6 ml-5 text-xl font-medium">Top all week</Text>
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
        <Text className="p-2 ml-5 pt-6 text-xl font-medium">Best selling</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 13,
          }}
          data={bestSellingDishes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card product={item} />}
        />
      </View>
    </ScrollView>
  );
}
