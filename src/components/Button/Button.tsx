import { ButtonComponent } from "./Button.styles";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  isCircle?: boolean;
}

export const Button = ({ children, onClick, isDisabled }: ButtonProps) => {
  return (
    <ButtonComponent onClick={onClick} disabled={isDisabled}>
      {children}
    </ButtonComponent>
  );
};
