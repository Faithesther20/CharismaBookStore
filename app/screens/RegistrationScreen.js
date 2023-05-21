import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
import * as Yup from "yup";

import AppText from "../components/AppText";
import IconButton from "../components/IconButton";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import KeyboardAvoiding from "../components/KeyBoardAvoiding";
import { handleRegistration } from "../handlers/registrationHandler";

function RegistrationScreen({ navigation }) {
  // The registrationValidationSchema for the input values by the user with yup
  const registrationValidationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "Username must contain only letters and numbers"
      ),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password must contain at least one letter and one number"
      ),
    re_enterPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Assuming you have stored the user input values in state variables

  // Create a function to handle the registration
  const handleRegister = (values) => {
    handleRegistration(values, navigation);
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
            Create an Account 🔐
          </AppText>
          <AppText style={styles.title}>
            Enter a username, email & password to get your account created.
          </AppText>
        </View>

        {/* using formik to manage the forms */}
        <View style={styles.form}>
          <AppForm
            initialValues={{
              username: "",
              email: "",
              password: "",
              re_enterPassword: "",
            }}
            onSubmit={handleRegister}
            validationSchema={registrationValidationSchema}>
            {/* for each inpute field an error message is attached fo */}
            <AppFormField
              name="username"
              icon={"account-circle"}
              placeholder={"Enter a user name"}
              fieldType={undefined}
            />
            <AppFormField
              icon="account-circle"
              placeholder="Enter an email address"
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
            <AppFormField
              name="re_enterPassword"
              icon={"lock"}
              fieldType="password"
              placeholder={"Re-enter password "}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={styles.button}>
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
    marginTop: "30%",
  },
  content: {
    flex: 0.7,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    flex: 3,
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

export default RegistrationScreen;
