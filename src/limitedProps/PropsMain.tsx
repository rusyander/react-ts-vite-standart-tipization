import React from "react";
import Button from "./Button";

export default function PropsMain(): JSX.Element {
  return (
    <div>
      <Button primary>Click me</Button>
      <Button secondary>Click me</Button>
      <Button primary arrow>
        Click me
      </Button>
      <Button secondary icon={"icon secondary"}>
        Click me
      </Button>
      <Button secondary icon={"icon secondary"}>
        Click me
      </Button>
    </div>
  );
}
