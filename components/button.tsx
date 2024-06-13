//import liraries
import { FontAwesome} from "@expo/vector-icons";

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  name?: string;
  position?: string;
  icon?: any;
  color?: string;
  border?: string;
  textColor?: string;
  onPress?:()=>any;
  
};

// create a component
const ButtonComponent: React.FC<Props> = ({
  name,
  position,
  icon,
  color,
  border,
  textColor,
  onPress
}) => {
  return (
    <View className="">
      <TouchableOpacity
        className={`${border} h-[50px] w-[80vw] ${color} rounded flex items-center p-2 m-2 flex-row ${position}`}
        onPress={onPress

        }

      >
        {icon ? (
          <FontAwesome
            style={{
              marginLeft: 10,
            }}
            name={icon}
            size={20}
          />
        ) : (
          <></>
        )}

        <Text className={`ml-5 text-base ${textColor} font-medium `}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default ButtonComponent;
