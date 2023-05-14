import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        blurRadius={1}
        source={require("../assets/bookshelve.jpg")}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.headingContainer}>
          <AppText style={styles.heading}>Welcome to </AppText>
          <AppText style={[styles.heading, styles.logo]}>Charisma 👋</AppText>
        </View>
        <View>
          <AppText style={styles.welcomeText}>
            The Number One Ebook Store Application for Inspiring Books in this
            Century
          </AppText>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            customStyle={styles.googleButton}
            customTextStyle={styles.googleButtonText}
            iconImage={require("../assets/google.png")}
            title={"Continue with Google"}
          />
          <AppButton title={"Get Started"} />

          <AppButton
            title={"Already Have an Account"}
            customStyle={styles.gotoLoginButton}
            customTextStyle={styles.gotoLoginButtonText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 50,
  },
  content: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "45%",
    borderTopLeftRadius: 100,
    backgroundColor: colors.white,
    padding: 20,
  },
  container: {
    flex: 1,
  },
  googleButton: {
    backgroundColor: "#f4f4f4",
  },
  googleButtonText: {
    color: colors.black,
  },
  gotoLoginButton: {
    backgroundColor: colors.lightOrange,
  },
  gotoLoginButtonText: {
    color: colors.orange,
  },
  headingContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
  },

  image: {
    flex: 0.6,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logo: {
    // fontWeight: "bold",
    // fontSize: 30,
    color: colors.orange,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 19,
  },
});

export default WelcomeScreen;
