import React from "react";
import { walletTabsStyles } from "@/constants/styles";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const WalletTabs = () => {
  return (
    <View style={walletTabsStyles.container}>
      <TouchableOpacity style={walletTabsStyles.tabButton}>
        <Text style={walletTabsStyles.tabText}>Tickets</Text>
      </TouchableOpacity>
      <TouchableOpacity style={walletTabsStyles.tabButtonTwo}>
        <Text style={walletTabsStyles.tabText}>Collectables</Text>
      </TouchableOpacity>
    </View>
  );
};



export default WalletTabs;
