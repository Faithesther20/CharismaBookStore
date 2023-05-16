import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppInputText";
import PasswordInput from "../PasswordInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, fieldType, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  // this form field if statment was created so that all password fields would have the eye icon and make use of the password Input component
  if (fieldType !== "password") {
    return (
      <>
        <AppTextInput
          onChangeText={handleChange(name)}
          onBlur={() => setFieldTouched(name)}
          {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
    );
  } else {
    return (
      <>
        <PasswordInput
          onChangeText={handleChange(name)}
          onBlur={() => setFieldTouched(name)}
          {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
    );
  }
}

export default AppFormField;
