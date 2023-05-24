import React, { useEffect } from "react";
import { StyleSheet, View, Text, TextBase } from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import LottieView from "lottie-react-native";
import animation from "../assets/anim/book_anim.json";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { color } from "react-native-reanimated";
import colors from "../config/colors";

// import Urbanist from '../assets/fonts/Urbanist-VariableFont_wght.ttf';

// async function loadFonts() {
//     await Font.loadAsync({
//       Urbanist: Urbanist,
//     });
//   }

function SplashScreen(props) {
  //loading google ubanist font to project

  return (
    <View style={styles.background}>
      <AppText style={styles.motto}>Inspire. Believe. Read</AppText>
      <LottieView style={styles.animation} source={animation} autoPlay loop />
      <AppText style={styles.logo}>Charism Book Store</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: colors.orange,
    marginTop: 150,
    color: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  motto: {
    fontSize: 19,
    fontWeight: "400",
  },
});

export default SplashScreen;
