import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BookItem from "../components/BookItem";
import AppText from "../components/AppText";
import colors from "../config/colors";

const BookList = ({ data, onPress }) => {
  const renderItem = ({ item }) => {
    return <BookItem item={item} onPress={onPress} />;
  };


  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contentContainer: {
    // paddingHorizontal: 10,
    paddingVertical: 10,
  },
  separator: {
    backgroundColor: colors.lightGrey,
    height: 1,
  },
});

export default BookList;
