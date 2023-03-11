import cn from "classnames";
import { ReactNode } from "react";

type CommonButtonProps = {
  children: string;
  disabled?: boolean;
};

type PrimaryButtonProps = CommonButtonProps & {
  primary: boolean;
  arrow?: boolean;
  secondary?: never;
  icon?: never;
};
type SecondaryButtonProps = CommonButtonProps & {
  secondary: boolean;
  icon?: ReactNode;
  primary?: never;
  arrow?: never;
};

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

const Button = ({
  children,
  icon,
  disabled = false,
  arrow = false,
  primary = false,
  secondary = false,
}: ButtonProps) => {
  const classes = cn({ primary, secondary });

  return (
    <button className={classes} disabled={disabled}>
      {icon}
      <span>{children}</span>
      {arrow && "👉"}
    </button>
  );
};

export default Button;
