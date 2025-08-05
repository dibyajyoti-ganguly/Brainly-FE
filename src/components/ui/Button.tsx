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
      className={`${
        variant === "primary"
          ? "bg-indigo-600 opacity-90 text-white"
          : "bg-indigo-100 text-indigo-500"
      } w-40 h-11 rounded-md font-semibold text-base cursor-pointer flex items-center justify-center gap-2`}
    >
      {startIcon}
      <span>{text}</span>
    </button>
  );
};
