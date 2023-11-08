/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import Checkbox from "expo-checkbox";
import signupimg3 from "../../../../../../Assets/Images/signupimg3.png"
import signupimg4 from "../../../../../../Assets/Images/signupimg4.png"
import { border, colors, flex, space, text } from "../../../../../../Styles";

import buyericon from "../../../../../../Assets/Icons/buyericon.png"
import BtnRoundedPrimary from "../../../../../../Components/Buttons/BtnRoundedPrimary";
import TopNavigation from "./TopNavigation";
import Phone from "../../../../../../Components/Inputs/Phone";
import TextCustomInput from "../../../../../../Components/Inputs/TextCustomInput";
import { useNavigation } from "@react-navigation/native";
import subtract from "../../../../../../Assets/Images/subtract.png"
import useApp from "../../../../../../Hooks/useapp.hook";
import APPCONTEXT from "../../../../../../Context/app.context";
import auth from '@react-native-firebase/auth';


function BodySection(props) {
  const [initializing, setInitializing] = useState(true);
  const {selectedRole, setSelectedRole} = useContext(APPCONTEXT)
  const {params,updateParams, user, setUser} = useApp()

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const handleCheckboxToggle = (role) => {
    setSelectedRole(role);
  };
  const navigation = useNavigation()

  async function submit() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate("OtpVerification")
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
  }
  async function signin(){
    navigation.navigate('SignUpScreen1')
  }
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (user){
    navigation.navigate("OtpVerification")
  }

  return (
    <View style={[space.w_full,flex.flex_1, colors.bgSecondary]}>


      <TopNavigation/>
      <View style={[flex.flex_1,space.mt_100, colors.bgSecondary]}>
      <Image source={subtract} style={[{marginTop:selectedRole=="Buyer"?0:-25,resizeMode:"stretch",position:"absolute"},space.w_full]}/>
      <View style={[flex.flex_1, colors.bgSecondary]}>
      <Text style={[text.size_40,flex.self_center,{color:'black',}]}>EZLOAN </Text>
      <Text style={[text.robotoLight,text.size_20,flex.self_center, colors.textCoolGrey]}>Please sign up to continue</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[space.py_10, colors.bgWhite, space.mx_20, space.mt_80, {borderRadius:20}]}>
     
    
      <Text style={[text.robotoBold,text.size_25,flex.self_center, space.py_30,{color:'black',}]}>Create your account </Text>
     
          <View style={[space.px_20]}>
          <TextCustomInput
          input={email}
          setInput={setEmail}
          placeholder="Email Address"
          label=" "
          mt={10}
          custom={true}
          children={ ''}
        />
      
        </View>

        <View  style={[space.px_20]}>
   
          <TextCustomInput
          input={password}
          setInput={setPassword}
          placeholder="*******************"
          label=""
          mt={10}
          custom={true}
          children={ ''}
        />
         
   
        </View>

  
      <View style={[space.px_20, space.my_50]}>
      <BtnRoundedPrimary click={submit}>
       
        <Text style={[colors.textFlashWhite,text.robotoMedium,text.size_18]}>Sign up</Text>
       
      </BtnRoundedPrimary>
      </View>
      <Text onPress={()=>{navigation.navigate('SignUpScreen1')}} style={[text.robotoRegular,text.size_20,flex.self_end,space.mb_15,{color:'black'}]}>Already have an account? <Text style={[text.robotoBold,text.size_20,flex.self_end,{color:'blue', marginLeft:30}]}>Sign in</Text> </Text>
      </View>
      </ScrollView>
      </View>
      
      </View>
    </View>
  );
}

export default BodySection;
