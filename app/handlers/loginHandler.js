import { Alert } from "react-native";
import headerTitle from "./header";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/cart/userSlice";
import { setEmail} from "../redux/features/cart/emailSlice";
export const handleLogin = (
  values,
  navigation,
  userIdDispatch,
  emailDispatch
) => {
  // Create a new FormData object
  console.log(values);
  const formData = new FormData();

  // Append the username and password to the FormData object
  formData.append("email", values.email);
  formData.append("password", values.password);

  // Send an HTTP POST request to the login.php script
  fetch(`${headerTitle}/api/login.php`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      // Handle the response from the PHP script
      console.log(result.message);
      // Show success or error message

      // Perform further actions based on the login result
      if (result.userId) {
        Alert.alert("Success", result.message);
        // Access the dispatch function from Redux
        userIdDispatch(setUser(result.userId));
        emailDispatch(setEmail(values.email)); // Dispatch the setUser action to set the user ID in the store
        navigation.navigate("Home");
        // Redirect to the home screen or perform any desired actions
      } else {
        Alert.alert(
          "Error",
          result.message || "Login failed. Please try again."
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
