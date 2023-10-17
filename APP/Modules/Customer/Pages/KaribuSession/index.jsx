import React from 'react';
import { Image, Text, View } from 'react-native';
import karibuseshimg from "../../../../Assets/Images/karibuseshimg.png"
import { colors, flex, space, text } from '../../../../Styles';
import BtnBlockPrimary from '../../../../Components/Buttons/BtnBlockPrimary';
import { useNavigation } from '@react-navigation/native';

function KaribuSession(props) {
    const navigation = useNavigation();
    const goToWelcome = ()=>{
        navigation.navigate("WelcomeScreen")
    }
    return (
       <View style={[{backgroundColor:"white"},flex.flex_1,flex.justify_center]}>
        <Text style={[flex.self_center,text.robotoMedium,text.size_30,flex.justify_center,{top:-150}]}>Karibu Session</Text>
        <Text style={[flex.self_center, text.robotoRegular,colors.textTaupeGray,text.size_18,flex.justify_center,{top:-140}]}>You have been verified succesfully </Text>
       
       <View style={[flex.justify_center,{paddingHorizontal:80},flex.justify_center]}>
        <BtnBlockPrimary click={goToWelcome}>
            <Text style={[text.size_18,text.robotoBold,colors.textWhite]}>Shop Now</Text>
        </BtnBlockPrimary>
       </View>
     
       
       
        <Image source={karibuseshimg} resizeMode='cover' style={[{width:"100%",bottom:0,position:"absolute"}]} />
      
       </View>
    );
}

export default KaribuSession;