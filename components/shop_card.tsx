// Import libraries
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {useCart} from '@/cart_context'


type Props={
product?:any
}

// Create a component
const Card:React.FC<Props> = ({ product}) => {
  const router= useRouter();
  const { dispatch } = useCart();
  const handleCardPress = () => {
    // Navigate to the detail page, passing the product as a parameter
    router.push({
      pathname: 'details/[id]',
      params: { product }
    });
  };
  const handleAddPress=()=>{
    dispatch({ type: 'ADD_TO_CART', product });
    console.log("Added to card")
  }
  return (
    <TouchableOpacity  className="m-2"  onPress={handleCardPress}>
      <View className="flex-col border border-gray-300 rounded-lg overflow-hidden w-44 h-64 items-center justify-around">
        <View className="items-center justify-center mt-2">
          <Image source={{uri:product?.picture}} className="w-24 h-24" />
        </View>
        <View className="flex-1 items-center justify-center w-full p-2">
          <View className="mb-2">
            <Text className="text-lg font-bold">{product?.name}</Text>
            <Text className="text-sm mt-1">{product?.description}</Text>
            
          </View>
          <View className="flex-row justify-around items-center pt-4 w-full">
            <Text className="text-xl font-bold">${product?.price}</Text>
            <TouchableOpacity className="bg-primary p-2 rounded-full items-center w-12" onPress={handleAddPress}>
              <MaterialIcons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Make this component available to the app
export default Card;
