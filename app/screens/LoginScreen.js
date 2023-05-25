//@ts-check
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
import { handleLogin } from "../handlers/loginHandler";

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

  const handleLoginSubmit = (values) => {
    handleLogin(values, navigation); // Call handleLogin function
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
            onSubmit={handleLoginSubmit}
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
