//@ts-check
import { Alert } from "react-native";
import header from "./header";
import headerTitle from "./header";

export const handleRegistration = (values, navigation) => {
  // Create an object with the user input data

  console.log(values);
  const data = new FormData();

  data.append("username", values.username);
  data.append("email", values.email);
  data.append("password", values.password);
  data.append("isAdmin", "false");

  // Send an HTTP POST request to the local PHP script172.18.48.1    192.168.107.102:80
  fetch(`${headerTitle}/api/register.php`, {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => response.text())
    .then((result) => {
      // Handle the response from the PHP script
      console.log(result);
      // Show success alert
      Alert.alert("Registration successful!");
      navigation.navigate("Login");
      // Display appropriate feedback to the user
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.log(error);
      Alert.alert("Registration failed. Please try again.");
    });
};
