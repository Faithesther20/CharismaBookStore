import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import BookItem from "../components/BookItem";
import booksData2 from "./data/books2.json";
import categoryData from "./data/category.json";
import CategoryList from "../components/categoryList";
import AppText from "../components/AppText";
import colors from "../config/colors";

import fetchRecommendedBooks from "../handlers/fetchRecommendedBooks";
import fetchGeneCategories from "../handlers/fetchGeneCategories";

const HomeScreen = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchRecommendedBooksData();
    fetchGeneCategoriesData();
  }, []);

  const fetchRecommendedBooksData = async () => {
    const data = await fetchRecommendedBooks();
    setRecommendedBooks(data);
  };

  const fetchGeneCategoriesData = async () => {
    const data = await fetchGeneCategories();
    setCategoryList(data);
  };

  const renderItem = ({ item }) => {
    return <BookItem item={item} />;
  };

  const handleCategoryPress = (index) => {
    console.log("Category Pressed:", categoryData[index]);
    // Add your custom logic here
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        {console.log(recommendedBooks)}
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.recommendedContainer}>
          <AppText style={styles.titleText}>Recommended for you</AppText>
          <FlatList
            data={recommendedBooks}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={renderSeparator}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
        <View styles={styles.geneContainer}>
          <View style={[styles.headingContainer, styles.geneHeading]}>
            <AppText style={styles.titleText}>Explore by Gene</AppText>
            <TouchableOpacity>
              <Ionicons name="arrow-forward" size={24} color={colors.orange} />
            </TouchableOpacity>
          </View>
          <View style={styles.exploreListContainer}>
            <CategoryList data={categoryList} onPress={handleCategoryPress} />
          </View>
        </View>
        <View>
          <View style={[styles.headingContainer, styles.geneHeading]}>
            <AppText style={styles.titleText}>More for You</AppText>
            <TouchableOpacity>
              <Ionicons name="arrow-forward" size={24} color={colors.orange} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={booksData2}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={renderSeparator}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
      </ScrollView>
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
  exploreListContainer: {
    paddingVertical: 10,
  },
  geneHeading: {
    paddingHorizontal: 0,
    paddingRight: 10,
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
    fontSize: 20,
    // backgroundColor: colors.lightGrey,
    borderRadius: 6,
  },
});

export default HomeScreen;
