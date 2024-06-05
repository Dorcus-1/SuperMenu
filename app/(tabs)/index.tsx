import {
  Image,
  StyleSheet,
  View,
  Platform,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "@/components/header";
import DeliveryCard from "@/components/delivery_card";
import PromotionCard from "@/components/promotion_card";
import { restaurants } from "@/data/restaurants.data";
import Card from "@/components/shop_card";
import Categories from "@/components/categories";
import { categories } from "@/data/categories.data";
export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="">
        <Header />
      </View>
      <View className="p-2">
        <DeliveryCard />
      </View>
      <View className="p-2 mt-[-30px]">
        <PromotionCard />
      </View>

      <View>
        <Text className="p-2 ml-5 pb-6 text-xl font-medium">Categorie</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 12,
          }}
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Categories name={item.name} icon={item.icon} />
          )}
        />
      </View>
      <View>
        <Text className="p-2 pt-6 ml-5 text-xl font-medium">Top all week</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 13,
          }}
          data={restaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card product={item} />}
        />
      </View>
      <View>
        <Text className="p-2 ml-5 pt-6 text-xl font-medium">Best selling</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 13,
          }}
          data={restaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card product={item} />}
        />
      </View>
    </ScrollView>
  );
}
