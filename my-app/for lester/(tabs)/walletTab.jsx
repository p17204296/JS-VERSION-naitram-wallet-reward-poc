import { globalStyles } from "@/constants/styles";
import { View } from "@gluestack-ui/themed";
import Header from "@/components/common/Header";
import WalletTabs from "@/components/wallet/WalletTabs";
import Collectables from "@/components/wallet/Collectables";

export default function WalletTab() {
  return (
    <View style={globalStyles.container}>
      <Header headingText="Your Wallet" subHeadingText="Ways to earn" />
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={10}
      >
        <WalletTabs />
      </View>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={10}
      >
        <Collectables />
      </View>
    </View>
  );
}
