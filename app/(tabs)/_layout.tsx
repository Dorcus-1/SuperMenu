import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabBarIcon from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
            size={focused ? 24 : 26} 
            name={"home"} 
            color={"#A01B2C"} />
          ),
        }}
      />
     
      <Tabs.Screen
        name="menu"
        options={{
          title:"",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={focused ? 24 : 26}
              name={"menu"}
              color={"#A01B2C"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title:"",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={focused ? 24 : 26}
              name={"shopping-cart"}
              color={"#A01B2C"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title:"",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={focused ? 24 : 26}
              name={"user"}
              color={"#A01B2C"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
