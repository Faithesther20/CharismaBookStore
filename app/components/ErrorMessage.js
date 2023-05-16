import React from "react";
import { StyleSheet, Text } from "react-native";

import AppText from "./AppText";

function ErrorMessage({ family = "Urbanist", error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: "red", fontSize: 5 },
});

export default ErrorMessage;