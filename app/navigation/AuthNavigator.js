import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import BookDetailScreen from "../screens/BookDetailScreen";
import CartScreen from "../screens/CartScreen";
import PaymentScreen from "../screens/PaymentScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
   <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegistrationScreen}
      options={{ headerShown: false }}
    /> 

    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="BookDetails"
      component={BookDetailScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Payment"
      component={PaymentScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
