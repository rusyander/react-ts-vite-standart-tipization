import React from "react";
import { LoginFormFields } from "./types";
import LoginForm from "./LoginForm";

export default function FormApp() {
  const onSubmit = (formFields: LoginFormFields) => {
    console.log(formFields);
  };

  return (
    <div className="App">
      <h1>Hello TS React</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
