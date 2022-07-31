import { ButtonHTMLAttributes, ReactNode } from "react";

import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button
      className="max-w-[600px] bg-primary border-0 p-2 text-white rounded-lg transition-colors disabled:cursor-pointer hover:brightness-110 flex justify-center items-center"
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <FaSpinner color="#FFF" size={16} className="animate-spin" />
      ) : (
        <a className="text-white">{children}</a>
      )}
    </button>
  );
}
