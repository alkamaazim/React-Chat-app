import React from "react";

type Props = {
  btnText: string;
  className?: string;
  onClick ?: () => void
};

const Button = ({ btnText, className, onClick }: Props) => {
  return (
    <React.Fragment>
      <button onClick={onClick} className={`${className} inline-flex text-white bg-customBlue border-0 py-2 px-6 focus:outline-none hover:bg-customSkyBlue rounded text-lg`}>
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default Button;
