import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  View,
  Text,
  Icon,
  Accordion,
  Image,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import { earningsAccordionStyles } from "@/constants/styles";

const Earnings = () => {

  const assetsPath = "../assets/naitram";
    // Mock earnings data
    const earningsData = {
      amount: "$1000",
      currency: "MRT",
      label: "View Earnings",
      icon: ChevronDownIcon,
    };
  

  return (
    <Accordion style={earningsAccordionStyles.Accordion}>
      <View style={earningsAccordionStyles.containerRow}>
        <View style={earningsAccordionStyles.containerColumn}>
          {/* Div's upper half */}
          <View style={earningsAccordionStyles.upperHalfStyle}>
            <Text style={earningsAccordionStyles.showRewardAmount}>{earningsData.amount}</Text>
            <Text style={earningsAccordionStyles.showRewardCurrency}>{earningsData.currency}</Text>
          </View>

          {/* Div's lower half */}
          <View style={earningsAccordionStyles.lowerHalfStyle}>
            <Text style={earningsAccordionStyles.showRewardEarnings}>{earningsData.label}</Text>
          </View>
        </View>

        <View>
          <Image alt="Trophy Image" source={require(`${assetsPath}/trophy.webp`)} />
        </View>
      </View>
    </Accordion>
  );
};

export default Earnings;
