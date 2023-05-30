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
import IconButton from "../components/IconButton";

import colors from "../config/colors";
import AppText from "../components/AppText";

const { width } = Dimensions.get("window");

const CartScreen = () => {
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
          <Text style={styles.removeItemButtonText}>Remove</Text>
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
          onPress={() => navigation.navigate("Home")}
          style={styles.icon}
        />
        <AppText style={styles.title}>Details</AppText>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
    marginVertical:10,
    borderRadius: 20,
  },
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  
  itemImage: {
    width: 70,
    height: 110,
    resizeMode: "cover",
    marginRight: 10,
    borderRadius: 9,
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
    backgroundColor: "#FF0000",
    borderRadius: 5,
  },
  removeItemButtonText: {
    color: "#FFFFFF",
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
    backgroundColor: "#FFCC00",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default CartScreen;
