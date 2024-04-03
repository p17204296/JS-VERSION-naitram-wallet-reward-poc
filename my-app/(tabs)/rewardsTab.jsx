import React from "react";
import { ScrollView } from "react-native";
import { globalStyles } from "@/constants/styles";
import { View } from "@gluestack-ui/themed";
import Header from "@/components/common/Header";
import EarningsAccordion from "@/components/reward/EarningsAccordion";
import MyItems from "@/components/reward/MyItems";
import ClaimableRewardsList from "@/components/reward/ClaimableRewardsList";

export default function RewardsTab() {
  return (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <Header headingText="Your Rewards" subHeadingText="Ways to earn" />
      <View padding={10}>
        <EarningsAccordion />
      </View>
      <View padding={10}>
        <MyItems />
      </View>
      <View padding={10}>
        <ClaimableRewardsList />
      </View>
    </ScrollView>
  );
}
