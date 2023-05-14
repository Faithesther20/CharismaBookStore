import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";

import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "orange",
  customStyle,
  customTextStyle,
  iconImage,
}) {
  return (
    <>
      {
        // creating a tenary operator to render the image icon if it was passed
        iconImage ? (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors[color] },
              customStyle,
            ]}
            onPress={onPress}>
            <View style={styles.iconContainer}>
              <Image source={iconImage} style={styles.icon} />
              <Text style={[styles.text, customTextStyle]}>{title}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors[color] },
              customStyle,
            ]}
            onPress={onPress}>
            <Text style={[styles.text, customTextStyle]}>{title}</Text>
          </TouchableOpacity>
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight:10
  },
  text: {
    color: colors.white,
    fontSize: 18,
    // textTransform: "upp",
    fontWeight: "bold",
  },
});

export default AppButton;
