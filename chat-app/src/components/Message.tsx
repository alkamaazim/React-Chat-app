import React from "react";
import { UserAuth } from "../context/AuthContext";

type Props = {
  message: any;
};

const Message = ({ message }: Props) => {
  console.log(message.avatar);
  const { currentUser }: any = UserAuth();
  return (
    <React.Fragment>
      <div>
        <div
          id="toast-default"
          className="flex items-center my-3 w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow"
          role="alert"
        >
          <img
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={message.avatar}
            alt="Bordered avatar"
          />
          <div className="ml-3 text-sm font-normal">{message.text}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Message;
