import React from 'react';

const Button = ({
  classes = '',
  handlefunction = () => {},
  icon = <></>,
  text = '',
  href = '',
}) => {
  return href ? (
    <a href={href}>
      <button
        onClick={handlefunction}
        className={`flex items-center gap-1 flex-no-shrink px-4 py-[6px] text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2   text-white rounded-md transition ease-in duration-300 ${classes} `}
      >
        {icon}
        {text}
      </button>
    </a>
  ) : (
    <button
      onClick={handlefunction}
      className={`flex items-center gap-1 flex-no-shrink px-4 py-[6px] text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2   text-white rounded-md transition ease-in duration-300 ${classes} `}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
