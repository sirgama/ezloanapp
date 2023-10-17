import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { flex, colors, text,space, border } from '../../../../../../Styles';
import { useNavigation } from '@react-navigation/native';
import width from '../../../../../../Styles/space/width';
import height from '../../../../../../Styles/space/height';
import contactimage from '../../../../../../Assets/Images/contactimg.png'


import color from '../../../../../../Styles/colors/color';
import Border from '../../../../../../Styles/border';
import marginX from '../../../../../../Styles/space/marginX';
import { Alert } from 'react-native';

const TopNavigation = (props) => {
    const navigation = useNavigation();
    const goBack =()=>{
        navigation.navigate("Profile")
    }


    return (
        <View style={[{position:"absolute",top:30,left:20},flex.justify_center]}>
       <View style={[flex.row,flex.between,{top:-15}]}>
       <Ionicons name="md-chevron-back" size= {25} color={"black"} style={[flex.self_center]} onPress={goBack}/>
        <Text style={[colors.textPrimary,{left:60}, text.size_25,text.robotoBold,flex.self_center,{textAlign:"center"}]}>Contact / Chat with us </Text>
       </View>


       <View style={[flex.row,flex.justify_center, {top:20}, ]}>
       <View style={[flex.column]}>
       <Image source={contactimage} style={[{left:0, top:0},  ]}/>
       </View>
       </View>

        
       </View>
    )
}

export default TopNavigation