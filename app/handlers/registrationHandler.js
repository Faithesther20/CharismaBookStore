import { Alert } from "react-native";

export const handleRegistration = (values, navigation) => {
  // Create an object with the user input data

  console.log(values);
  const data = new FormData();

  data.append("username", values.username);
  data.append("email", values.email);
  data.append("password", values.password);
  data.append("isAdmin", "false");

  // Send an HTTP POST request to the local PHP script
  fetch("http://192.168.107.102:80/api/register.php", {
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
      navigation.navigate("Welcome");
      // Display appropriate feedback to the user
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.log(error);
      Alert.alert("Registration failed. Please try again.");
    });
};
