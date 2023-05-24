import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
import * as Yup from "yup";

import AppText from "../components/AppText";
import IconButton from "../components/IconButton";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import KeyboardAvoiding from "../components/KeyBoardAvoiding";

function LoginScreen({ navigation }) {
  // The loginValidationSchema for the input values by the user with yup
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password must contain at least one letter and one number"
      ),
  });

  const handleLogin = (values) => {
    // Create a new FormData object
    console.log(values);
    const formData = new FormData();

    // Append the username and password to the FormData object
    formData.append("email", values.email);
    formData.append("password", values.password);

    // Send an HTTP POST request to the login.php script
    fetch("http://192.168.107.102:80/api/login.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the PHP script
        console.log(result.message);
        // Show success or error message

        // Perform further actions based on the login result
        if (result.length > 0 && result[0].message === "Login successful!") {
          Alert.alert("Success", result[0].message);
          navigation.navigate("Home");
          // Redirect to the home screen or perform any desired actions
        } else {
          Alert.alert(
            "Error",
            result[0].message || "Login failed. Please try again."
          );
          // Clear the username and password fields or show error message
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.log(error);
        Alert.alert("Login failed. Please try again.");
      });
  };

  return (
    <KeyboardAvoiding>
      <View style={styles.container}>
        {/* <AppTextInput icon={"email"} placeholder={"Enter your email here"} />
      <AppTextInput icon={"email"} placeholder={"Enter your email here"} />
    */}
        <View style={styles.topBar}>
          <IconButton
            icon={"keyboard-backspace"}
            iconStyle={undefined}
            onPress={() => navigation.navigate("Welcome")}
          />
          <View style={styles.lineStyle} />
        </View>

        <View style={styles.content}>
          <AppText style={[defaultStyles.heading, styles.heading]}>
            Hello there 👋
          </AppText>
          <AppText style={styles.title}>
            Please enter your username and password to Login to the store
          </AppText>
        </View>

        {/* using formik to manage the forms */}
        <View style={styles.form}>
          <AppForm
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleLogin}
            validationSchema={loginValidationSchema}>
            {/* for each inpute field an error message is attached fo */}
            <AppFormField
              icon="account-circle"
              placeholder="Enter your registered email "
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              fieldType={undefined}
            />
            <AppFormField
              name="password"
              icon="lock"
              placeholder="Enter a password"
              fieldType="password"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <View style={styles.button}>
              {/* <AppButton
                customStyle={styles.googleButton}
                customTextStyle={styles.googleButtonText}
                iconImage={require("../assets/google.png")}
                title={"Continue with Google"}
              /> */}
              <SubmitButton title="Submit" />
            </View>
          </AppForm>
        </View>
      </View>
    </KeyboardAvoiding>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  content: {
    flex: 0.7,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    flex: 1,
  },
  googleButton: {
    backgroundColor: "#f4f4f4",
  },
  googleButtonText: {
    color: colors.grey,
  },
  heading: {
    marginTop: 25,
  },
  lineStyle: {
    width: "50%",
    height: 10,
    marginLeft: "20%",
    backgroundColor: colors.orange,
    display: "flex",
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    marginVertical: 10,
  },
  topBar: {
    flex: 0.2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LoginScreen;
