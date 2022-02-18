import { addField, RawField, field } from "react-fluent-form";
import { DateValue } from "./types";

declare module "react-fluent-form" {
  interface FieldCreator {
    datePicker: (initialValue?: DateValue) => RawField<DateValue, "selected">;
  }
}

addField("datePicker", (initialValue: DateValue = null) =>
  field.raw(initialValue).withValueProp("selected")
);
