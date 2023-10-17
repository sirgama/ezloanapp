import { View, Text } from "react-native";

import SplashScreen from "./Auth/SplashScreen";

import OnBoarding from "./Auth/OnBoarding";

import SignIn from "./Auth/SignIn";

import SignUp from "./Auth/SignUp";

// import Vendor from "./Vendor";

import Customer from "./Customer";
// import Rider from "./Rider";

const Module = ({ module = "SplashScreen" }) => {
  if (module === "SplashScreen") {
    return <SplashScreen />;
  }

  if (module === "OnBoarding") {
    return <OnBoarding />;
  }

  if (module === "SignIn") {
    return <SignIn />;
  }

  if (module === "SignUp") {
    return <SignUp />;
  }

  // if (module === "Vendor") {
  //   return <Vendor />;
  // }

  if (module === "Customer") {
    return <Customer />;
  }

  // if (module === "Rider") {
  //   return <Rider />;
  // }

  return (
    <View>
      <Text>Module not Found !</Text>
    </View>
  );
};

export default Module;
