import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SwipeableFlatList,
  Dimensions,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import IconButton from "../components/IconButton";

import colors from "../config/colors";
import AppText from "../components/AppText";

const { width } = Dimensions.get("window");

const CartScreen = ({navigation}) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Book 1",
      price: 9.99,
      quantity: 1,
      image: require("../assets/clever_lands.jpg"),
    },
    {
      id: 2,
      name: "Book 2",
      price: 14.99,
      quantity: 2,
      image: require("../assets/clever_lands.jpg"),
    },
    // Add more cart items here...
  ]);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemWrapper}>
      <View style={styles.cartItemContainer}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => handleQuantityChange(item.id, -1)}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => handleQuantityChange(item.id, 1)}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => handleRemoveItem(item.id)}
          style={styles.removeItemButton}>
          <MaterialIcons
            style={styles.removeItemButtonText}
            name="delete-outline"
            size={26}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleQuantityChange = (itemId, value) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + value;
          return {
            ...item,
            quantity: newQuantity >= 0 ? newQuantity : 0,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <IconButton
          icon={"keyboard-backspace"}
          iconStyle={undefined}
          onPress={() => navigation.navigate("BookDetails")}
          style={styles.icon}
        />
        <AppText style={styles.title}>Cart</AppText>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotalPrice()}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  cartItemWrapper: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
  },
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 6,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 9,
  },
  itemImage: {
    width: 80,
    height: 120,
    resizeMode: "cover",
    marginRight: 10,
    borderRadius: 11,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    marginRight: 10,
    borderRadius: 7,
    elevation: 3,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  removeItemButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    // backgroundColor: "#FF0000",
    borderRadius: 5,
  },
  removeItemButtonText: {
    color: "#FF0000",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: "35%",
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#DDDDDD",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
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
});

export default CartScreen;
