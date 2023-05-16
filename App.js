import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./app/screens/SplashScreen";
import Screen from "./app/components/Screen";
import Onboarding from "./app/components/Onboarding";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegistrationScreen from "./app/screens/RegistrationScreen";

export default function App() {
  return (
    <Screen>
      <RegistrationScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
