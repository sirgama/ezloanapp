import { View, Text, ImageBackground, Image } from "react-native";

import bgImg from "../../../Assets/Images/splash.png";

import { colors, flex, space } from "../../../Styles";
import useApp from "../../../Hooks/useapp.hook";
import { useContext, useEffect } from "react";
import APPCONTEXT from "../../../Context/app.context";



const SplashScreen = () => {
  const {toSignUp,toSignIn,toVendor,toCustomer,toRider} = useApp();
  const {user, setUser, token, setToken} = useContext(APPCONTEXT)

  useEffect(() => {
    const timeout = setTimeout(() => {
      toSignUp()
    }, 3000); 

    return () => clearTimeout(timeout); 
  }, []);

  return (
   <View style={[flex.flex_1]}>
   <Image source ={bgImg} resizeMode="stretch" style={[space.w_full,space.h_full]}/>
   </View>
  );
};

export default SplashScreen;
