import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { collectablesStyles } from "@/constants/styles";

const Collectables = () => {
  const items = [
    {
      title: "Naitram VIP Member",
      description: "Get exclusive access to VIP events",
      actionText: "View collectable",
      onPress: () => handleClaimMRT(),
    },
    {
      title: "Naitram Top Earner",
      description: "Earned 1000 MRT in a single day",
      actionText: "View collectable",
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
    <View style={collectablesStyles.container}>
      <Text style={collectablesStyles.heading}>Collectables</Text>
      <LinearGradient
        colors={["rgba(0,149,64,0.5) ", "rgba(0,0,0,0.7)"]}
        start={[0, 0]}
        end={[1, 0]}
        style={collectablesStyles.gradient}
      >
        <ScrollView horizontal>
          {items.map((item, index) => (
            <View
              key={index}
              style={[
                collectablesStyles.card,
                { backgroundColor: index % 2 === 0 ? "#009540" : "#004B20" },
              ]}
            >
              <Text style={collectablesStyles.title}>{item.title}</Text>
              <Text style={collectablesStyles.description}>{item.description}</Text>
              <TouchableOpacity
                onPress={item.onPress}
                style={[
                  collectablesStyles.actionButton,
                  { backgroundColor: index % 2 === 0 ? "#004B20" : "#009540" },
                ]}
              >
                <Text style={collectablesStyles.actionText}>{item.actionText}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Collectables;
