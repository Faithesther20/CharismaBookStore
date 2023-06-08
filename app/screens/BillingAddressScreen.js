import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import IconButton from "../components/IconButton";
                                            import { useDispatch, useSelector } from "react-redux";
import headerTitle from "../handlers/header";

const billingValidationSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  street: Yup.string().required("Street is required"),
});

function BillingAddressScreen({ navigation }) {
  const userId = useSelector((state) => state.user.userId);
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("country", values.country);
      formData.append("zipCode", values.zipCode);
      formData.append("state", values.state);
      formData.append("city", values.city);
      formData.append("street", values.street);

      const response = await fetch(`${headerTitle}/api/insertBillingAddress.php`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      console.log(data); // handle the response data as needed

      // Navigate to the next screen or perform any other actions
      navigation.navigate("Payment");
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the request
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <IconButton
          icon={"keyboard-backspace"}
          iconStyle={undefined}
          onPress={() => navigation.navigate("Cart")}
          style={styles.icon}
        />
        <AppText style={styles.title}> User Billing Address 📬</AppText>
      </View>
      {/* <AppText style={[defaultStyles.heading, styles.heading]}>
       
      </AppText> */}
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            country: "",
            zipCode: "",
            state: "",
            city: "",
            street: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={billingValidationSchema}>
          <AppFormField
            name="country"
            placeholder="Country"
            icon="earth"
            autoCapitalize="none"
          />
          <AppFormField
            name="zipCode"
            placeholder="Zip Code"
            icon="map-marker"
            keyboardType="numeric"
            maxLength={6}
          />
          <AppFormField
            name="state"
            placeholder="State"
            icon="flag"
            autoCapitalize="none"
          />
          <AppFormField
            name="city"
            placeholder="City"
            icon="city"
            autoCapitalize="none"
          />
          <AppFormField
            name="street"
            placeholder="Street"
            icon="road"
            autoCapitalize="none"
          />
          <SubmitButton title="Submit" />
        </AppForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    marginTop: 50,
    flex: 1,
    marginTop: "10%",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 12,
    paddingTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 4,
  },
  heading: {
    marginTop: 25,
    marginBottom: 20,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: "20%",
  },
});

export default BillingAddressScreen;
