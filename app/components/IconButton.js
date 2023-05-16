import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

function IconButton({ iconStyle, icon, ...otherProps }) {
  return (
    <TouchableOpacity {...otherProps}>
      <MaterialIcons style={iconStyle} name={icon} size={25} />
    </TouchableOpacity>
  );
}

export default IconButton;
