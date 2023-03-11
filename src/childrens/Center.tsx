import React from "react";
interface CenterProps {
  children: JSX.Element;
}
export default function Center({ children }: CenterProps): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        border: "3px solid green",
      }}
    >
      {children}
    </div>
  );
}
