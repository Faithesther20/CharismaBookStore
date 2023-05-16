import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
// importing the font helper
import { useFonts } from "expo-font";
import colors from "../config/colors";

function AppTextInput({ family = "Urbanist", icon, ...otherProps }) {
  const [isFocused, setIsFocused] = useState(false);
  let [fontLoaded] = useFonts({
    Urbanist: require("../assets/fonts/Urbanist-VariableFont_wght.ttf"),
  });

  // creating a component  that for the input field that accepts my custom font style
  return (
    <>
      {
        fontLoaded ? (
          <View
            style={[
              defaultStyles.inputContainer,
              {
                borderColor: isFocused ? colors.orange : colors.white,
                borderWidth: isFocused ? 2 : 0,
                backgroundColor: isFocused
                  ? colors.lightOrange
                  : colors.lightGrey,
              },
            ]}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.grey}
                style={styles.icon}
              />
            )}
            <TextInput
              style={[styles.text, { fontFamily: family }]}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...otherProps}
            />
          </View>
        ) : null
        //   (
        //     <View style={styles.container}>
        //       {icon && (
        //         <MaterialCommunityIcons
        //           name={icon}
        //           size={20}
        //           color={defaultStyles.colors.black}
        //           style={styles.icon}
        //         />
        //       )}
        //       <TextInput style={defaultStyles.text} {...otherProps} />
        //     </View>
        //   )
      }
    </>
    // <View style={styles.container}>
    //   {icon && (
    //     <MaterialCommunityIcons
    //       name={icon}
    //       size={20}
    //       color={colors.grey}
    //       style={styles.icon}
    //     />
    //   )}
    //   <TextInput style={styles.text} {...otherProps} />
    // </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  text: {
    width: "100%",
    fontSize: 19,
  },
});

export default AppTextInput;
