import React from "react";
import Button from "./Button";
import { UserAuth } from "../context/AuthContext";

type Props = {};

const Navbar = (props: Props) => {
  const { currentUser, logout }: any = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <header className="text-gray-600 body-font bg-customBlue fixed w-full z-20 top-0 left-0">
        <div className="container mx-auto flex justify-between flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">CHATRooM.</span>
          </a>
          {currentUser ? (
            <Button btnText="Logout" onClick={handleLogout} />
          ) : (
            ""
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
