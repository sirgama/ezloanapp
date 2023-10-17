import React, { useContext } from "react";
import APPCONTEXT from "../Context/app.context";

const useApp = () => {
  const doc = useContext(APPCONTEXT);

  const toSignIn = () => doc.setModule("SignIn");

  const toSignUp = () => doc.setModule("SignUp");

  // const toVendor = () => doc.setModule("Vendor");
  const toCustomer = () => doc.setModule("Customer");
  // const toRider = () => doc.setModule("Rider");

  const toOnBoarding = () => doc.setModule("OnBoarding");
  

  return {
    ...doc,
    toSignUp,
    toSignIn,
    // toVendor,
    toCustomer,
    // toRider,
    toOnBoarding,
  };
};

export default useApp;
