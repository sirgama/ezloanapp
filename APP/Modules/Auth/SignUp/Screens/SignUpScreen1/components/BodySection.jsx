/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import BtnRoundedSecondary from '../../../../../../Components/Buttons/BtnRoundedSecondary';
import BtnRoundedPrimary from '../../../../../../Components/Buttons/BtnRoundedPrimary';
import { colors, flex, space, text } from '../../../../../../Styles';
import signuplogo from "../../../../../../Assets/Images/signuplogo.png"
import { useNavigation } from '@react-navigation/native';
import subtract from "../../../../../../Assets/Images/subtract.png"
import TopNavigation from './TopNavigation';
import useApp from "../../../../../../Hooks/useapp.hook";
import APPCONTEXT from "../../../../../../Context/app.context";
import TextCustomInput from '../../../../../../Components/Inputs/TextCustomInput';
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
      .signInWithEmailAndPassword(email, password)
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
        <View style={[space.w_full,flex.flex_1, colors.bgSecondary]}>


        <TopNavigation/>
        <View style={[flex.flex_1,space.mt_100, colors.bgSecondary]}>
        <Image source={subtract} style={[{marginTop:selectedRole=="Buyer"?0:-25,resizeMode:"stretch",position:"absolute"},space.w_full]}/>
        <View style={[flex.flex_1, colors.bgSecondary]}>
        <Text style={[text.robotoBlack,text.size_40,flex.self_center, {color:'black', fontWeight:'bold'}]}>EZLOAN</Text>
        <Text style={[text.robotoMedium,text.size_25,flex.self_center, space.mt_15, colors.textPrimary]}>Welcome Back!</Text>
        <Text style={[text.robotoLight,text.size_20,flex.self_center, {color:'black'}]}>Please sign in to continue</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[space.py_10, colors.bgWhite, space.mx_20, space.mt_80, {borderRadius:20}]}>
       
      
      
       
  
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
         
          <Text style={[colors.textFlashWhite,text.robotoMedium,text.size_18]}>Login</Text>
         
        </BtnRoundedPrimary>
        </View>
        <Text onPress={()=>{navigation.navigate('SignUpScreen2')}}  style={[text.robotoRegular,text.size_20,flex.self_end,space.mb_15,{color:'black'}]}>Don't have an account? <Text style={[text.robotoBold,text.size_20,flex.self_end,{color:'blue', marginLeft:30}]}>Sign up</Text> </Text>
        </View>
        </ScrollView>
        </View>
        
        </View>
      </View>
      
    );
}

export default BodySection;