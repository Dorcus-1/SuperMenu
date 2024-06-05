//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Link } from "expo-router";

// create a component
class LandingPage extends Component {
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={{
            height: "100%",
            backgroundColor: "#A01B2C"
        }}>
            <View className="h-full w-full justify-center items-center">
                <Link href='register'>
                    <Text className="text-4xl font-bold">SUPA<Text className="text-white">MENU</Text></Text>
                </Link>


            </View>
          
        </ScrollView>
      </View>
    );
  }
}

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#A01B2C',

//     },
// });

//make this component available to the app
export default LandingPage;
