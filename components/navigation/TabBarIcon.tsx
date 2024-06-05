// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import React, { type ComponentProps } from 'react';

type Props={
  name:any
  size:number
  color:string
}

const TabBarIcon:React.FC<Props>=({name,size,color})=>{
  return <Feather size={size} style={[{ marginBottom: -3 }]} name={name} color={color} />;
}
export default TabBarIcon