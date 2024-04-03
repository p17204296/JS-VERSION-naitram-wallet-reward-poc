import { claimableRewardsListStyles } from "../../constants/styles";
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const ClaimableRewardsList = () => {
  const rewards = [
    {
      id: 1,
      title: "Daily Login Bonus",
      description: "Earn 5 MRT for logging in today!",
      actionText: "Claim Reward",
      onPress: () => handleClaimReward(1),
    },
    {
      id: 2,
      title: "Weekly Challenge",
      description: "Complete 7 days of activity to earn 10 MRT!",
      actionText: "Claim Reward",
      onPress: () => handleClaimReward(2),
    },
    {
      id: 3,
      title: "Refer a Friend",
      description: "Refer a friend to earn 20 MRT!",
      actionText: "Claim Reward",
      onPress: () => handleClaimReward(3),
    },
    // Add more rewards as needed
  ];

  const handleClaimReward = (rewardId: number) => {
    // Handle claim reward action based on rewardId
    console.log("Claim reward pressed for reward with ID:", rewardId);
  };

  return (
    <View style={claimableRewardsListStyles.container}>
      <Text style={claimableRewardsListStyles.heading}>Claimable Rewards 🏆</Text>
      <ScrollView contentContainerStyle={claimableRewardsListStyles.scrollContainer}>
        {rewards.map((reward) => (
          <View key={reward.id} style={claimableRewardsListStyles.rewardContainer}>
            <Text style={claimableRewardsListStyles.title}>{reward.title}</Text>
            <Text style={claimableRewardsListStyles.description}>{reward.description}</Text>
            <TouchableOpacity
              onPress={reward.onPress}
              style={claimableRewardsListStyles.actionButton}
            >
              <Text style={claimableRewardsListStyles.actionText}>{reward.actionText}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ClaimableRewardsList;
