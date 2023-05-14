import React from "react";
import { StyleSheet, View, useWindowDimensions, Image } from "react-native";

import LottieView from "lottie-react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function OnboardingItems({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[StyleSheet.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.animImage, { width, resizeMode: "contain" }]}
      />
      console.log(item)
      <View style={{ flex: 0.3 }}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.description}>{item.description}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animImage: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: colors.orange,
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: colors.grey,
    textAlign: "center",
    paddingHorizontal: 66,
  },
});

export default OnboardingItems;
