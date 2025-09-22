import type { ComponentProps } from "react";

function Button({ onClick, children }: ComponentProps<"button">) {
  return (
    <button
      onClick={onClick}
      className="grid place-content-center text-mony dark:text-mony-dark cursor-pointer border rounded-full border-mony dark:border-mony-dark hover:bg-mony hover:text-pry dark:hover:bg-mony-dark dark:hover:text-pry-dark active:opacity-70"
    >
      {children}
    </button>
  );
}

export default Button;
