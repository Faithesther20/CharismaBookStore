import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
// importing the font helper
import { useFonts } from "expo-font";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native";

function PasswordInput({ family = "Urbanist", icon, ...otherProps }) {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  let [fontLoaded] = useFonts({
    Urbanist: require("../assets/fonts/Urbanist-VariableFont_wght.ttf"),
  });

  // creating a component  that for the input field that accepts my custom font style
  return (
    <>
      {fontLoaded ? (
        <View
          style={[
            defaultStyles.inputContainer,
            // changing the background of a text input based on if its focused on
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
            {...otherProps}
            secureTextEntry={visible} // this is where the visible was set to change the password fields
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <TouchableOpacity
            // style={styles.hideAndShowIcon}
            // onpress to handle hide and show button. hooks where used
            onPress={() => {
              setShow(!show);
              setVisible(!visible);
            }}>
            <MaterialCommunityIcons
              name={show === false ? "eye-outline" : "eye-off-outline"} // rendering the eyes icon
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ) : null
    //   (

    //     // most of the hooks where not included here because I knew the fonts would load
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
    //       <TouchableOpacity
    //         style={styles.hideAndShowIcon}
    //         onPress={() => {
    //           setShow(!show);
    //         }}>
    //         <MaterialCommunityIcons
    //           name={show === false ? "eye-outline" : "eye-off-outline"}
    //           size={24}
    //           color="black"
    //         />
    //       </TouchableOpacity>
    //     </View>
    //   )
      }
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  hideAndShowIcon: {
    //    marginLeft:10,
    backgroundColor: "yellow",
  },
  text: {
    width: "80%",
    fontSize: 19,
  },
});

export default PasswordInput;
