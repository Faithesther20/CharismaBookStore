import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const BookItem = ({ item, onPress }) => {
  // Assuming `item.image` contains the relative path to the image file
  // const { title, author, bookId } = item;
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.bookContainer}>
        <Image source={{ uri: item.image }} style={styles.bookImage} />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.bookTitle}>
          {item.title}
        </Text>
        <Text style={styles.bookPrice}>₦{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookContainer: {
    // Add space between books by applying margin                                                                                                                                                                                                                                                                                         
    margin: 7,
    shadowColor: "#d0cccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },

  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  bookTitle: {
    fontSize: 14, // Reduce the font size as desired
    fontWeight: "bold", // Increase the font weight for a bolder appearance
    width: 100, // Set the width to match the book image width
  },
  bookPrice: {
    fontSize: 12, // Reduce the font size as desired
    fontWeight: "bold", // Increase the font weight for a bolder appearance
  },
});

export default BookItem;
