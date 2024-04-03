import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MyItemsStyles } from "@/constants/styles";

const MyItems = () => {
  const items = [
    {
      title: "Daily Login Bonus",
      description: "Earn 5 MRT for logging in today!",
      actionText: "Claim MRT",
      onPress: () => handleClaimMRT(),
    },
    {
      title: "Upcoming Event",
      description: "Brit Awards After party 2024",
      actionText: "See details",
      onPress: () => handleSeeDetails(),
    },
    // Add more items as needed
  ];

  const handleClaimMRT = () => {
    // Handle claim MRT action
    console.log("Claim MRT pressed");
  };

  const handleSeeDetails = () => {
    // Handle see details action
    console.log("See details pressed");
  };

  return (
    <View style={MyItemsStyles.container}>
      <Text style={MyItemsStyles.heading}>My Items 🪐</Text>
      <LinearGradient
        colors={["rgba(0,149,64,0.5) ", "rgba(0,0,0,0.7)"]}
        start={[0, 0]}
        end={[1, 0]}
        style={MyItemsStyles.gradient}
      >
        <ScrollView horizontal>
          {items.map((item, index) => (
            <View
              key={index}
              style={[
                MyItemsStyles.card,
                { backgroundColor: index % 2 === 0 ? "#009540" : "#004B20" },
              ]}
            >
              <Text style={MyItemsStyles.title}>{item.title}</Text>
              <Text style={MyItemsStyles.description}>{item.description}</Text>
              <TouchableOpacity
                onPress={item.onPress}
                style={[
                  MyItemsStyles.actionButton,
                  { backgroundColor: index % 2 === 0 ? "#004B20" : "#009540" },
                ]}
              >
                <Text style={MyItemsStyles.actionText}>{item.actionText}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};


export default MyItems;
