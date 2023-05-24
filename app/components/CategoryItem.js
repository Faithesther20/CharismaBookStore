import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CategoryItem = ({ title, image }) => {
  return (
    <View style={styles.categoryContainer}>
      <Image
        source={require("../assets/bookshelve.jpg")}
        style={styles.categoryImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 10,
    backgroundColor: "rgba(255, 165, 0, 0.5)",
    marginRight: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "flex-end",
    width: 100,
    height: 150,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  categoryImage: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  textContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default CategoryItem;
