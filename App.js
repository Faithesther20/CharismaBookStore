import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// {
// import SplashScreen from "./app/screens/SplashScreen";
import Screen from "./app/components/Screen";
// import Onboarding from "./app/components/Onboarding";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import RegistrationScreen from "./app/screens/RegistrationScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// }
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import myTheme from "./app/navigation/navigationTheme";
import HomeScreen from "./app/screens/HomeScreen";
import BookDetailScreen from "./app/screens/BookDetailScreen";
import CartScreen from "./app/screens/CartScreen";
import { Provider } from "react-redux";
import store from "./app/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={myTheme}>
        <Screen>
          <AuthNavigator />
        </Screen>
      </NavigationContainer>
    </Provider>

    // // <Screen>
    //   {/* <CartScreen /> */}
    // {/* //   <BookDetailScreen/> */}
    // {/* </Screen> */}
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
