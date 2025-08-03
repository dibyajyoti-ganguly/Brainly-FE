/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick: () => void;
  text: string;
  startIcon?: any;
  endIcon?: any;
}

export const Button = (props: ButtonProps) => {
  const { variant, onClick, text, startIcon } = props;

  return (
    <button
      onClick={onClick}
      className={` ${
        variant === "primary"
          ? "bg-indigo-600 opacity-90 text-white"
          : "bg-indigo-100 text-indigo-500"
      } w-36 h-10 font-mono rounded-md text-sm `}
    >
      {startIcon} {text}
    </button>
  );
};
