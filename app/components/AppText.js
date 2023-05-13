import { StyleSheet, Text } from "react-native";

// importing the font helper
import { useFonts } from "expo-font";

function AppText({
  family = "Urbanist",
  fontStyle = "",
  children,
  style,
  ...otherProps
}) {
  // calling the actual fonts
  // pass the path to your fon't here with a name
  let [fontLoaded] = useFonts({
    Urbanist: require("../assets/fonts/Urbanist-VariableFont_wght.ttf"),
  });

  return (
    <>
      {/* Checking if the font has loaded successfully using a jsx if statement format */}
      {fontLoaded ? (
        // what to display when font has loaded (if)
        <Text
          style={[styles.text, { fontFamily: family }, style]}
          {...otherProps}>
          {children}
        </Text>
      ) : (
        // what to display when font has not loaded (else)
        <Text style={[styles.text, style]} {...otherProps}>
          {children}
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({});

export default AppText;
