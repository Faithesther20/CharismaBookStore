import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CategoryItem = ({ title, image }) => {
  return (
    <View style={styles.categoryContainer}>
      <Image
        blurRadius={6}
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
    position: "relative",
    width: 120,
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  textContainer: {
    position: "absolute",
    bottom: 5,
    left: 5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
});

export default CategoryItem;
