import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

type Props = {
  children: any;
};

export const PrivateRoutes = ({ children }: Props) => {
  const {currentUser}: any = UserAuth();
  // const currentUser = false;

  if(!currentUser){
    return <Navigate to="/" replace={true} />
  }
  return children;
};
