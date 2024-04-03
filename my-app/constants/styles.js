import { StyleSheet } from "react-native";

const colors = {
  primary: "#004d40",
  secondary: "#FAC900",
  tertiary: "#FFA000",
  quaternary: "#FFC107",
  quinary: "#FFD54F",
  senary: "#FFECB3",
  septenary: "#FFF9C4",
  octonary: "#FFFFFF",
  black: "#000000",
};

export const globalStyles = StyleSheet.create({
  whiteText: {
    color: "white",
    fontSize: 24,
  },
  container: {
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapperStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  rewardsContentStyle: {
    color: "white",
    fontSize: 24,
    width: 550,
    height: "98%",
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "left",
    padding: 20,
    borderRadius: 10,
    margin: "auto",
    // position: 'static', /* Needed to contain the BottomBar absolutely within it */
  },
  searchTopbarStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    width: "100%",
    height: 14,
    padding: 20,
    borderRadius: 5, // Fix: Changed the value to a numeric value
  },
});

export const headerStyles = StyleSheet.create({
  backgroundImageStyle: {
    width: "100%",
    height: 100,
  },
  leftSideStyle: {
    display: "flex",
    flexDirection: "row", // Aligns children in a row
    justifyContent: "flex-start", // Aligns children to the start of the container (left side)
    gap: 5, // Keeps the gap property for spacing between items
    width: "33.3%",
  },
  rightSideStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 10,
    width: "33.3%",
  },
  svgContainerStyle: {
    display: "flex",
    backgroundColor: "#004d40",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  profileHeadingStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 0,
    padding: 0,
  },
  profileSubheadingStyle: {
    color: "white",
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
});

export const earningsAccordionStyles = StyleSheet.create({
  Accordion: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 110,
    backgroundColor: "#FAC900", // Button background color
    // padding: '0 20px', // Padding on the sides
    padding: 20, // Padding on the sides
    borderRadius: 15,
  },
  containerRow: {
    display: "flex", // Enable flexbox
    flexDirection: "row", // Arrange children in a column
    gap: 0, // Space between items
    textAlign: "left",
    height: "100%",
    flex: 1,
  },
  containerColumn: {
    display: "flex", // Enable flexbox
    flexDirection: "column", // Arrange children in a column
    gap: 0, // Space between items
    textAlign: "left",
    height: "100%",
    flex: 1,
  },

  upperHalfStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline", // Align the baselines of the children
    flex: 2,
  },
  showRewardAmount: {
    color: colors.black,
    fontWeight: "800",
    fontSize: 32,
  },
  showRewardCurrency: {
    color: colors.black,
    fontWeight: "bold",
    marginStart: 5,
    fontSize: 12,
  },
  lowerHalfStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start", // Keep content at the top
    flex: 2, // Take up available space
  },
  showRewardEarnings: {
    color: colors.black,
    fontWeight: "600",
    fontSize: 21,
  },

  imageStyle: {
    overflow: "hidden", // This ensures that only the part of the image fitting into the container is visible
    display: "flex", // Use flexbox to center the image
    justifyContent: "flex-end", // Center horizontally
    alignItems: "center", // Center vertically
    flex: 1,
    aspectRatio: 1, // Maintain aspect ratio
    height: '100%', // Set height to 100
  },
});

export const MyItemsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "left",
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gradient: {
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 10,
  },
  card: {
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 280,
  },
  title: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: "#ffffff",
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  actionText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export const claimableRewardsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#000000",
  },
  heading: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "left",
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  rewardContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: "#009540",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export const walletTabsStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  tabButton: {
    backgroundColor: "#010300",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  tabButtonTwo: {
    backgroundColor: "#009540",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export const collectablesStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "left",
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gradient: {
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 10,
  },
  card: {
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 290,
  },
  title: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: "#ffffff",
  },
  actionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  actionText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});