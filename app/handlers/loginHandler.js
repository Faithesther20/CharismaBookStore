import { Alert } from "react-native";

export const handleLogin = (values, navigation) => {
  // Create a new FormData object
  console.log(values);
  const formData = new FormData();

  // Append the username and password to the FormData object
  formData.append("email", values.email);
  formData.append("password", values.password);

  // Send an HTTP POST request to the login.php script
  fetch("http://192.168.88.102:80/api/login.php", {
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

// export default handleLogin;
