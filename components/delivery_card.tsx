import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DeliveryCard = () => {
  return (
    <TouchableOpacity className="bg-primary rounded-lg p-4  m-4 flex-row items-center shadow-lg">
      <View className="flex-1">
        <Text className="text-white font-bold text-lg">Delivery to Home</Text>
        <Text className="text-white text-sm">Utama Street no. 14, Rumbai</Text>
        <View className="mt-2 bg-white rounded-full px-2 py-1 w-16">
          <Text className="text-primary text-center text-sm">2.4 km</Text>
        </View>
      </View>
      <Feather name="chevron-right" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default DeliveryCard;
