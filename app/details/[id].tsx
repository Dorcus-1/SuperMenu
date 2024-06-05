import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute,RouteProp } from "@react-navigation/native";
import { Stack, useNavigation, useRouter, } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


type Product = {
    name: string;
    quantity: string;
    price: number;
    image: any;
  };
  
  type RouteParams = {
    product: Product;
  };
  const ProductDetail: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { product } = route.params;
  

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View>
        <Stack.Screen
          options={{
            header: () => (
              <View className="h-96 w-full bg-gray-200 rounded-b-2xl justify-center items-center">
                <View className="flex-row justify-between items-center w-full px-4 py-2">
                  <TouchableOpacity
                    className="w-10 h-10 rounded-full bg-white justify-center items-center"
                    onPress={() => navigation.goBack()}
                  >
                    <Ionicons name="chevron-back" size={24} color="#000" />
                  </TouchableOpacity>
                  <Ionicons name="download-outline" size={24} color="black" />
                </View>
                <Image source={product.image} className="h-40 w-64 bg-gray-200 justify-center items-center"/>
                        
              </View>
            ),
          }}
        />
      </View>
      <View className="p-4">
        <Text className="text-lg font-bold text-black">{product.name}</Text>
        <Text className="text-base text-gray-500">{product.price}</Text>
      </View>
    </View>
  );
};

export default ProductDetail;
