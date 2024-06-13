import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
interface Props extends TextInputProps {
  label?: string;
  value?: string;
  handleChange?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  icon?: any; // assuming icon is a string representing the icon name
}
const Formfield: React.FC<Props> = ({
  label,
  value,
  handleChange,
  placeholder,
  secureTextEntry = false,
  icon,
  ...rest // rest of the TextInput props
}) => {
  return (
    <View className="justify-center items-center mb-4">
      {label && <Text className="self-start mb-2">{label}</Text>}
      <View className="flex-row items-center w-[80vw] border-2 border-gray-300 rounded h-[50px] px-2">
        {icon && (
          <Feather name={icon} size={20} color="gray" className="mr-2" />
        )}
        <TextInput
          className="flex-1 text-black pl-6  "
          value={value}
          onChangeText={handleChange}
          placeholder={placeholder}
          placeholderTextColor="gray"
          secureTextEntry={secureTextEntry}
          {...rest} // pass rest of the props to TextInput
        />
      </View>
    </View>
  );
};

export default Formfield;
