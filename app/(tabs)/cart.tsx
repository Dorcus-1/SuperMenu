//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useCart } from "@/cart_context";
import { Feather } from "@expo/vector-icons";

type Props = {
  product?: any;
};
// create a component
const Cart: React.FC<Props> = ({ product }) => {
  const { cart, dispatch } = useCart();

  const handleRemovePress = (product:any) => {
    dispatch({ type: "REMOVE_FROM_CART", product });
  };

  const totalAmount = cart.reduce(
    (sum:number, item:any) => sum + parseInt(item?.price) * item?.quantity,
    0
  );
  console.log(cart);

  return (
    <View className="flex-1  p-6">
      <SafeAreaView>
        <Text className="text-2xl font-bold mb-4 p-6 pl-32">My Cart</Text>
        <FlatList
          data={cart}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={({ item }) => (
            <View className="flex-row justify-between items-center mb-4">
              <Image source={{uri:item?.picture}} className="w-16 h-16" />
              <View className="flex-1 ml-4">
                <Text className="text-lg font-bold">{item?.name}</Text>
                <Text className="text-sm">{item?.quantity} pcs</Text>
              </View>
              <Text className="text-lg font-bold">${item?.price}</Text>
              <TouchableOpacity
                className="bg-primary p-2 rounded-full ml-4"
                onPress={() => handleRemovePress(item)}
              >
                <Feather name="x" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}
        />
        <View className="border-t border-gray-300 mt-4 pt-4">
          <Text className="text-xl font-bold">
            Total: ${totalAmount.toFixed(2)}
          </Text>
          <TouchableOpacity className="bg-primary p-4 rounded-full mt-4">
            <Text className="text-center text-white text-lg font-bold">
              Go to Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

// define your styles

//make this component available to the app
export default Cart;
