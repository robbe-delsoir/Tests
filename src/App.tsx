import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

import "./fluentFormConfig";

import * as React from "react";
import { useState } from "react";
import { RegistrationForm } from "./RegistrationForm";

export default function App() {
  const [country, setCountry] = useState("USA");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCountry(e.target.value);

  return (
    <div className="App">
      <select value={country} onChange={handleCountryChange}>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
        <option value="USA">USA</option>
      </select>
      <h1>react-fluent-form</h1>
      <RegistrationForm country={country} />
    </div>
  );
}
