import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import axios from 'axios';

const TabsComponent = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const tabs = ['All', 'Featured', 'Top of Week', 'Soup', 'Seafood'];
  const [categories, setCategories] = useState([]);

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

  return (
   
    <View className='flex flex-row justify-between  p-4  items-center'>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          onPress={() => setSelectedTab(tab)}
          className='mr-4'
        >
          <Text
            className={`text-base ${selectedTab === tab ? 'text-black font-bold' : 'text-gray-500'} `}  
          >
            {tab}
          </Text>
          {selectedTab === tab && (
            <View className='h-1 bg-primary mt-1' />
          )}
        </TouchableOpacity>
      ))}
    </View>
 
  );
};

export default TabsComponent;
