import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const PromotionCard = () => {
  return (
    <View className="bg-red-100 rounded-lg p-4 m-4 flex-row items-center shadow-lg">
      <View className="flex-1">
        <Text className="text-black font-bold text-lg">Chicken Teriyaki</Text>
        <Text className="text-gray-500 text-sm">Discount 25%</Text>
        <TouchableOpacity className="bg-primary w-[180px] h-[40px] rounded-full  p-3 mt-2">
          <Text className="text-white text-center">Order Now</Text>
        </TouchableOpacity>
      </View>
      <Image 
        source={require('../assets/images/food/prom_card.png')} 
        className="w-24 h-24 rounded-full"
      />
    </View>
  );
};

export default PromotionCard;
