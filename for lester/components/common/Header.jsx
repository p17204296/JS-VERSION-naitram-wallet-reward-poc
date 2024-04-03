import React from "react";
import {
  View,
  Text,
  Icon,
  ArrowLeftIcon,
  Avatar,
  AvatarImage,
} from "@gluestack-ui/themed";
import { headerStyles } from "@/constants/styles";
import { ImageBackground } from "react-native";

const Header = ({ headingText, subHeadingText }) => {
  const assetsPath = "../assets/naitram";

  return (
    <ImageBackground
      source={require(`${assetsPath}/heading.jpg`)}
      style={headerStyles.backgroundImageStyle}
    >
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={10}
      >
        {/* Left Column */}
        <View>
          <Icon as={ArrowLeftIcon} color="white" size="xl" />
        </View>

        {/* Center Column */}
        <View flexDirection="column" alignItems="center">
          <Text style={headerStyles.profileHeadingStyle}>{headingText}</Text>
          <Text style={headerStyles.profileSubheadingStyle}>{subHeadingText}</Text>
        </View>

        {/* Right Column */}
        <View>
          <Avatar>
            <AvatarImage source={require(`${assetsPath}/token.webp`)} />
          </Avatar>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Header;
