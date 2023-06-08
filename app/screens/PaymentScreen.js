import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import { cartTotalPriceSelector } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { color } from "react-native-reanimated";
import colors from "../config/colors";
import headerTitle from "../handlers/header";

import { clear } from "../redux/features/cart/cartSlice";

import { Paystack, paystackProps } from "react-native-paystack-webview";

const PaymentScreen = () => {

  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const userId = useSelector((state) => state.user.userId);
  const email = useSelector((state) => state.email.email);
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.map((cartItem) => {
    return {
      userId: userId,
      bookId: cartItem.bookId,
      name: cartItem.name,
      quantity: cartItem.orderQuantity,
      price: cartItem.price,
    };
  });

  const insertOrders = () => {
    const url = `${headerTitle}/api/insertOrders.php`;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems }),
    };

    console.log("Before fetch request", cartItems); // Debugging statement

    fetch(url, requestOptions)
      .then((response) => {
        console.log("Response received"); // Debugging statement
        return response.json();
      })
      .then((result) => {
        console.log("Result:", result); // Debugging statement
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Paystack
        paystackKey="pk_test_21606eb6b8e00bcbb8882d98bc4e5bda0f2e0ca6"
        billingEmail={email}
        amount={totalPrice}
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
          Alert.alert("Payment successful");
          console.log("myItem", { cartItems });
          insertOrders();
        }}
        ref={paystackWebViewRef}
      />
      <Image style={styles.image} source={require("../assets/payment.jpg")} />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>₦{totalPrice}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => paystackWebViewRef.current.startTransaction()}>
          <Text style={styles.checkoutButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButton: {
    backgroundColor: colors.orange,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 3,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginRight: 10,
    borderRadius: 11,
  },
  totalContainer: {
    margin: 10,
    borderColor: colors.lightOrange,
    borderWidth: 3,
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  emailInput: {
    height: 40,
    width: "100%",
    borderColor: colors.lightOrange,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});
