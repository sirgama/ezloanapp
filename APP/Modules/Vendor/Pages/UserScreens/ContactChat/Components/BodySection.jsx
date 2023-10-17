import React, { useContext, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, View,Switch, Linking, TouchableOpacity } from "react-native";
import { border, colors, flex, space, text } from "../../../../../../Styles";
import { AntDesign, Feather, Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import TopNavigation from "./TopNavigation";
import Phone from "../../../../../../Components/Inputs/Phone";
import TextCustomInput from "../../../../../../Components/Inputs/TextCustomInput";
// import { useNavigation } from "@react-navigation/native";
import subtract from "../../../../../../Assets/Images/subtract.png"
import phonee from "../../../../../../Assets/Images/phone.png"
import emaill from "../../../../../../Assets/Images/email.png"
import instagram from "../../../../../../Assets/Images/instagram.png"
import facebook from "../../../../../../Assets/Images/facebook.png"
import { useNavigation } from "@react-navigation/core";



function BodySection(props) {
  
  const navigation = useNavigation()
  const socials = {instagram:"@vedi_africa", facebook:"vedi_africa", phoneNumber:"0712345678",email:"support@vediafrica.com"}
  const openInstagramProfile = () => {
    Linking.openURL(`https://www.instagram.com/${socials.instagram}/`)
      .catch((err) => console.error('Error opening Instagram:', err));
  };
  const openFacebookProfile = () => {
    Linking.openURL(`https://www.facebook.com/${socials.facebook}/`)
      .catch((err) => console.error('Error opening Facebook:', err));
  };
  const openDialPad = () => {
    
    Linking.openURL(`tel:${socials.phoneNumber}`)
      .catch((err) => console.error('Error opening dial pad:', err));
  };
  const openEmailApp = () => {
    let mailtoUrl = `mailto:${socials.email}`;
    mailtoUrl += `?subject=${encodeURIComponent("VENDOR ASSISTANCE")}`;
    Linking.openURL(mailtoUrl).catch((err) => console.error('Error opening email:', err));
  };


  return (
    <View style={[space.w_full,flex.flex_1]}>

      <View style={[{maxHeight:250, minHeight:250},space.w_full,]}>
        
      </View>
      <TopNavigation/>
      <View style={[flex.flex_1,{marginTop:-70}]}>
      <Image source={subtract} style={[{marginTop:0,resizeMode:"stretch",position:"absolute"},space.w_full]}/>
      <View style={[flex.flex_1,{marginTop:10}]}>
      <Text style={[text.robotoMedium,text.size_25,flex.self_center]}></Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[space.py_0]}>
      <View style={[space.margin_0,space.py_15, flex.row, flex.justify_between,flex.align_center]}>
        <View style={[colors.bgCoolGrey, ]}/>
        <Text style={[text.robotoBold,text.size_25,space.w_80,{marginLeft:-10, textAlign:'center', }]}>Hey <MaterialCommunityIcons name="hand-wave" size={24} style={[{color:'#ffb02f'}]} /> We're here to help!</Text>
        <View style={[colors.bgCoolGrey,]}/>
    </View>

    <View style={[space.margin_0,space.py_0, flex.row, flex.justify_between,flex.align_center]}>
        <View style={[colors.bgCoolGrey, ]}/>
        <Text style={[text.robotoMedium,text.size_18,space.w_80,{marginLeft:-10, textAlign:'center', },colors.textCoolGrey]}>Got any question about our service or  your order? Just ask! Our Vedi  superheroes are ready to assist and support you.</Text>
        <View style={[colors.bgCoolGrey,]}/>
    </View>
    <TouchableOpacity style={[ space.my_20, space.w_90, flex.self_center, {borderWidth: 1, borderColor:'rgba(192, 192, 192, 0.4)', borderRadius:10, paddingHorizontal: 10}]} onPress={openDialPad}>
          <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
            <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > Call us </Text>
            <Image source={phonee} style={[{left:30, top:8},  ]}/> 
          </View>
          <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.my_10,{marginTop:-10} ]} > 0712345678 / 0732165498</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[ space.my_10, space.w_90, flex.self_center, {borderWidth: 1, borderColor:'rgba(192, 192, 192, 0.4)', borderRadius:10, paddingHorizontal: 10}]} onPress={openEmailApp}>
          <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
            <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > Mail us </Text>
            <Image source={emaill} style={[{left:30, top:8},  ]}/> 
          </View>
          <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.my_10,{marginTop:-10} ]} > support@vediafrica.com</Text>
        </TouchableOpacity>


        <View style={[space.margin_20,space.px_10, flex.row, flex.justify_between,flex.align_center]}>
                <View style={[colors.bgCoolGrey, {height:1,width:"35%"}]}/>
                <Text style={[colors.textCoolGrey,text.robotoRegular,text.size_16]}>Social</Text>
                <View style={[colors.bgCoolGrey, {height:1,width:"35%"}]}/>
            </View>
     
      <View>
        

      <TouchableOpacity style={[ space.my_10, space.w_90, flex.self_center, {borderWidth: 1, borderColor:'rgba(192, 192, 192, 0.4)', borderRadius:10, paddingHorizontal: 10}]} onPress={openFacebookProfile}>
          <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
            <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > Facebook </Text>
           
            <Image source={facebook} style={[{left:30, top:8},  ]}/> 
          </View>
          <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.my_10,{marginTop:-10} ]} > vedi_africa</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[ space.my_10, space.w_90, flex.self_center, {borderWidth: 1, borderColor:'rgba(192, 192, 192, 0.4)', borderRadius:10, paddingHorizontal: 10}]} onPress={openInstagramProfile}>
          <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
            <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > Instagram </Text>
            <Image source={instagram} style={[{left:30, top:8},  ]}/> 
          </View>
          <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.my_10,{marginTop:-10} ]} > @vedi_africa</Text>
        </TouchableOpacity>
      </View>
     
      </View>
      </ScrollView>
      </View>
      
      </View>
    </View>
  );
}

export default BodySection;
