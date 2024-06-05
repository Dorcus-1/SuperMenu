import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Formfield from './form_field';

const Header = () => {
  return (
    <SafeAreaView>
    <View className="flex flex-col items-center bg-white ">
        <View className=' flex flex-row w-[80%] justify-evenly  p-6 items-center '>
        <Text className="text-xl font-bold pl-24">Home</Text>
        <TouchableOpacity className=' pl-6'>
          <Feather name="bell" size={20} color="black" />
        </TouchableOpacity>
        </View>
     
      {/* <View className="flex flex-row justify-between items-center w-full ">
        <TouchableOpacity>
          <Feather name="bell" size={20} color="black" />
        </TouchableOpacity>
      </View> */}
      <Formfield icon={"search"} placeholder={"Search on SupaMenu"} />
    </View>
    </SafeAreaView>
  );
};

export default Header;
