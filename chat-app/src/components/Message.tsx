import React from "react";

type Props = {
  message: any;
};

const Message = ({ message }: Props) => {
  return (
    <React.Fragment>
      <div
        id="toast-default"
        className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow"
        role="alert"
      >
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="/docs/images/people/profile-picture-5.jpg"
          alt="Bordered avatar"
        />

        <div className="ml-3 text-sm font-normal">{message.text}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-default"
          aria-label="Close"
        ></button>
      </div>
    </React.Fragment>
  );
};

export default Message;
