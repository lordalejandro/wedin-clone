import { IconType } from "react-icons";

type Props = {
  disabled?: boolean;
  icon?: IconType;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  small?: boolean;
};

const Button: React.FC<Props> = ({
  disabled = false,
  icon: Icon,
  label,
  onClick,
  outline = false,
  small = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:opacity-80 hover transition w-full flex items-center justify-center gap-3
        ${outline ? "bg-white" : "bg-primaryBackgroundColor"}
        ${outline ? "border-primaryBackgroundColor border-2" : "bg-primaryBackgroundColor"}
        ${outline ? "text-primaryTextColor" : "text-white"}
        ${small ? "py-1.5" : "py-2"}
        ${small ? "text-md" : "text-md"}
        ${small ? "font-light" : "font-medium"}

      `}
    >
      {label}
      {Icon ? <Icon size={22} /> : null}
    </button>
  );
};

export default Button;
