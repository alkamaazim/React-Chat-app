import React from "react";
import Hero from "../components/Hero";
import { UserAuth } from "../context/AuthContext";

type Props = {};

const Login = (props: Props) => {
  const { currentUser }: any = UserAuth();
  console.log(currentUser);
  return (
    <React.Fragment>
      <Hero />
    </React.Fragment>
  );
};

export default Login;
