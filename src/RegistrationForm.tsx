import * as React from "react";
import { useEffect } from "react";

import DatePicker from "react-datepicker";
import { useFluentForm } from "react-fluent-form";

import { registrationFormConfig } from "./registrationFormConfig";

interface RegistrationFormProps {
  country: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  country
}) => {
  const { values, fields, errors, handleSubmit, setContext } = useFluentForm(
    registrationFormConfig
  );

  const handleSubmitSuccess = () => console.log(values);

  const handleSubmitFailure = () => console.log(errors);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setContext({ country }), [country]);

  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitFailure)}>
      <label>
        Username*:
        <input {...fields.username} />
        {errors.username && <div className="error"> {errors.username[0]} </div>}
      </label>
      <label>
        Date of Birth*:
        <DatePicker {...fields.dateOfBirth} />
        {errors.dateOfBirth && (
          <div className="error"> {errors.dateOfBirth[0]} </div>
        )}
      </label>
      <label>
        Password*:
        <input {...fields.password} />
        {errors.password && <div className="error"> {errors.password[0]} </div>}
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
