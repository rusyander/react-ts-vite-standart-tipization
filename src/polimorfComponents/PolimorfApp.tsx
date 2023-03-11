import React from "react";
import Text from "./Text";
import Button from "./Button";

export default function PolimorfApp() {
  return (
    <div className="App">
      <Text as="h1">Hello CodeSandbox</Text>
      <Text as="label" htmlFor="id">
        Start editing to see some magic happen!
      </Text>
      <div>
        <Button primary as="a" href="/" target="_blank">
          Click me
        </Button>
        <Button secondary type="button" disabled>
          Click me
        </Button>
      </div>
    </div>
  );
}
