import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: BoxProps) {
  return (
    <div
      style={{ padding: "20px", border: "1px solid red" }}
      className={className}
    >
      {children}
    </div>
  );
}
