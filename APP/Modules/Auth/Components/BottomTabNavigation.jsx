/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { border, colors, flex, shadow, space, text } from '../../../Styles';
import home from "../../../Assets/Images/home.png"
import pie from "../../../Assets/Images/pie.png"
import set from "../../../Assets/Images/settings.png"
import chat from "../../../Assets/Images/chat.png"
import { useNavigation } from '@react-navigation/native';


function BottomTabNavigation(props) {
    
    const [cartCount,setCartCount] =useState(0)
    const navigation = useNavigation();
    const goToCart = () => {
        navigation.navigate('MyKhat')
    }
    const gotostage = () => {
        navigation.navigate('stage')
    }
    return (
       <View style={[flex.row,flex.justify_evenly, {position:"absolute", bottom:0,borderTopRightRadius:0,borderTopLeftRadius:0,elevation:15,backgroundColor:"white"},space.w_full,space.py_20,flex.align_center]}>
         <TouchableOpacity onPress={()=>{navigation.navigate("OtpVerification")}} style= {[flex.column,flex.align_center,space.ml_15,]}>
        <Image source={home} style={{ width: "100%", height: "100%", resizeMode: "cover", position:"absolute", }} />
            <Text style={[space.ml_10,text.robotoRegular,text.size_16,space.mt_20,{color:'transparent'} ]}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("stage")}} style= {[flex.column,flex.align_center,space.ml_15,]}>
        <Image source={pie} style={{ width: "100%", height: "100%", resizeMode: "cover", position:"absolute", }} />
            <Text style={[space.ml_10,text.robotoRegular,text.size_16,space.mt_20,{color:'transparent'} ]}>stage</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={()=>{navigation.navigate("Vendors")}} style= {[flex.column,flex.align_center,space.ml_15,]}>
        <Image source={chat} style={{ width: "100%", height: "100%", resizeMode: "cover", position:"absolute", }} />
            <Text style={[space.ml_10,text.robotoRegular,text.size_16,space.mt_20,{color:'transparent'} ]}>chat</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>{navigation.navigate("Vendors")}} style= {[flex.column,flex.align_center,space.ml_15,]}>
        <Image source={set} style={{ width: "100%", height: "100%", resizeMode: "cover", position:"absolute", }} />
            <Text style={[space.ml_10,text.robotoRegular,text.size_16,space.mt_20,{color:'transparent'} ]}>setti</Text>
        </TouchableOpacity>

       </View>
    );
}

export default BottomTabNavigation;