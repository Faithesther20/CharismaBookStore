import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import BookItem from "../components/BookItem";
import booksData from "./data/books.json";
import AppText from "../components/AppText";
import { prepareDataForValidation } from "formik";
import colors from "../config/colors";

const HomeScreen = () => {
  const renderItem = ({ item }) => {
    return <BookItem item={item} />;
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <FontAwesome5 name="book" size={24} style={styles.bookIcon} />
          <AppText style={styles.textStyle}>Charism</AppText>
        </View>
        <TouchableOpacity style={styles.searchContainer}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.recommendedContainer}>
        <AppText style={styles.titleText}>Recommended for you</AppText>
        <FlatList
          data={booksData}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
      <View>
        <AppText style={styles.titleText}>Explore our gene</AppText>
        <View style={styles.exploreContainer}>
          <AppText>Gene 1</AppText>
          <AppText>Gene 2</AppText>
          <AppText>Gene 3</AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookIcon: {
    color: colors.orange,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10,
    // alignItems: "center",
  },
  contentContainer: {
    //   paddingHorizontal: 10, // Add horizontal spacing between items
    //  paddingVertical: 10, // Add vertical spacing between items
  },
  headingContainer: {
    width: "100%",

    // backgroundColor:"orange",
    // marginTop: 80,
    paddingHorizontal: 20,
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  recommendedContainer: {
    marginVertical: 20,
    // backgroundColor:"yellow",
  },
  separator: {
    backgroundColor: "yellow",
    // Set the desired space height
    backgroundColor: "transparent", // Adjust the color as needed
  },
  searchContainer: {
    justifySelf: "flex-end",
  },
  textStyle: {
    // Define your default text styles here
    fontSize: 20,
    color: "black",
    padding: 5,
    fontWeight: "bold",
    // ...other text styles
  },
  titleText: {
    fontWeight: "bold",
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: colors.lightGrey,
    borderRadius: 6,
  },
});

export default HomeScreen;
