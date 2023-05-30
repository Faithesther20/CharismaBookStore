import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { color } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import IconButton from "../components/IconButton";
import BookItem from "../components/BookItem";
import AppButton from "../components/AppButton";
import { color } from "react-native-reanimated";

const BookDetailScreen = ({ navigation,route }) => {
  const { bookId } = route.params;
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const formData = new FormData();
  formData.append("bookId", bookId);

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(
        "http://192.168.245.28:80/api/bookDetails.php",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/x-www-form-urlencoded",
          // },
          body: formData,
        }
      );

      const data = await response.json();
      setBookDetails(data);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
    
  };

  const addToCart = () => {
    navigation.navigate("Cart", { book: bookDetails });
  };

  useEffect(() => {
    console.log("Book Details:", bookDetails);
  }, [bookDetails]);

  return (
    <View style={styles.container}>
      {/* heading container */}
      <View style={styles.headingContainer}>
        <IconButton
          icon={"keyboard-backspace"}
          iconStyle={undefined}
          onPress={() => navigation.navigate("Home")}
          style={styles.icon}
        />
        <AppText style={styles.title}>Details</AppText>
      </View>
      {/* book styles */}
      {bookDetails ? (
      <View style={styles.detailContainer}>
        <View style={styles.bookContainer}>
          <Image
            style={styles.bookImage}
            source={{uri: bookDetails.bookImage}}
          />
          <View style={styles.bookDesciption}>
            <AppText  numberOfLines={2} style={styles.bookTitle}>{bookDetails.name}</AppText>
            <View style={styles.starContainer}>
              <AntDesign
                name="star"
                size={24}
                color="black"
                style={styles.star}
              />
              <AntDesign
                name="star"
                size={24}
                color="black"
                style={styles.star}
              />
              <AntDesign
                name="star"
                size={24}
                color="black"
                style={styles.star}
              />
              <AntDesign
                name="star"
                size={24}
                color="black"
                style={styles.star}
              />
              <AntDesign
                name="staro"
                size={24}
                color="black"
                style={styles.star}
              />
            </View>
            <AppText
              numberOfLines={3}
              ellipsizeMode="tail"
              style={styles.bookCategoryName}>
              {bookDetails.category}
            </AppText>
            <AppText
              numberOfLines={3}
              ellipsizeMode="tail"
              style={styles.bookCategoryName}>
              Price:₦{bookDetails.price}
            </AppText>
          </View>
        </View>
        {/* horizontal seperation */}
        <View style={styles.bookDetails}>
          <AppText style={styles.about}>About the book</AppText>
          <AppText style={styles.aboutContainer}>
            {bookDetails.description}
          </AppText>
        </View>

        <AppButton
          title="Add to cart"
          style={{ backgroundColor: colors.lightOrange }}
          onPress={addToCart}
        />
      </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
    
  );
};

const styles = StyleSheet.create({
  about: {
    fontSize: 18,
  },
  aboutContainer: {
    paddingVertical: 10,
    fontSize: 16,
    color: colors.grey,
    lineHeight: 25,
    textAlign: "justify",
  },
  bookCategoryName: {
    // marginTop: 10,
    color: colors.grey,
    // textAlign:"center",
    fontSize: 15,

    // textAlign:"center"
  },
  bookContainer: {
    flexDirection: "row",
    //  flexDirection:"row",
    // justifyContent: "space-between",
  },
  bookDesciption: {
    justifyContent: "flex-start",
    backgroundColor: colors.lightGrey,
    marginVertical: 10,
    padding: 25,
    paddingRight: 15,
    borderBottomEndRadius: 20,
    borderTopRightRadius: 20,
  },
  bookDetails: {
    backgroundColor: colors.lightGrey,
    width: "100%",
    height: "50%",
    marginTop: 20,
    borderRadius: 8,
    padding: 20,
  },
  bookImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },                                                                                                                               
  bookTitle: {
    fontSize: 19,
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightOrange,
    padding: 20,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  detailContainer: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 17,
    shadowColor: "#d0cccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  icon: {
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 6,
    shadowColor: "#d0cccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  star: {
    fontSize: 15,
    color: colors.orange,
  },
  starContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: "35%",
  },
});

export default BookDetailScreen;
