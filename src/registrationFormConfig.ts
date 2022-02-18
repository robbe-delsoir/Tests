import * as yup from "yup";

import { createForm, field } from "react-fluent-form";
import { DateValue } from "./types";

interface RegistrationForm {
  username: string;
  password: string;
  dateOfBirth: DateValue;
}

const yearsBack16 = new Date();
const yearsBack18 = new Date();

yearsBack16.setFullYear(yearsBack16.getFullYear() - 16);
yearsBack18.setFullYear(yearsBack18.getFullYear() - 18);

export const registrationFormConfig = createForm<RegistrationForm>()({
  username: field.text("user0"),
  dateOfBirth: field.datePicker(),
  password: field.password().validateOnSubmitOnly()
}).withValidation({
  username: yup
    .string()
    .required()
    .min(4),
  dateOfBirth: (value, values, { country }) => {
    if (country === "USA") {
      return yup
        .date()
        .required()
        .max(yearsBack16, "you must be at least 16");
    } else {
      return yup
        .date()
        .required()
        .max(yearsBack18, "you must be at least 18");
    }
  },
  password: (value, { username }, context) => {
    if (username && value.includes(username)) {
      /**
       * It's an array since yup schema below will
       * also result in a error of type string[]
       * So it's easier to handle errors
       * if they all have the same type
       */
      return ["password can't contain username"];
    } else {
      return yup
        .string()
        .required()
        .min(8);
    }
  }
});
