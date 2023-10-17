import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { flex, colors, text,space, border } from '../../../../../../Styles';
import { useNavigation } from '@react-navigation/native';
import profheader from '../../../../../../Assets/Images/profheader.png'
import width from '../../../../../../Styles/space/width';
import height from '../../../../../../Styles/space/height';
import profilepic from '../../../../../../Assets/Images/profilepic.png'
import BtnRoundedSecondary from '../../../../../../Components/Buttons/BtnRoundedSecondary';
import BtnRoundedPrimary from '../../../../../../Components/Buttons/BtnRoundedPrimary';
import BtnBlockPrimary from '../../../../../../Components/Buttons/BtnBlockPrimary';
import BtnRoundedSecondaryOutline from '../../../../../../Components/Buttons/BtnRoundedSecondaryOutline';
import BtnBlockPrimaryOutline from '../../../../../../Components/Buttons/BtnBlockPrimaryOutline';
import BtnRoundedPrimaryOutline from '../../../../../../Components/Buttons/BtnRoundedPrimaryOutline';
import color from '../../../../../../Styles/colors/color';
import Border from '../../../../../../Styles/border';
import marginX from '../../../../../../Styles/space/marginX';
import useApp from '../../../../../../Hooks/useapp.hook';

const TopNavigation = (props) => {
    const navigation = useNavigation();
    const  {toSignUp} = useApp()
    const goBack =()=>{
        navigation.navigate("Home")
    }
    const [user, setUser] = useState({
        vendorname: 'Vaite Supplies',
        location: 'Mlango Kubwa opposite Naivas',
        customers: 1.2,
        reviews:392,
        sales: 726,
    })


    return (
        <View style={[{position:"absolute",top:30,left:20},flex.justify_center]}>
       <View style={[flex.row,flex.between,{top:-15}]}>
       <Ionicons name="md-chevron-back-circle" size= {45} color={"white"} style={[flex.self_center]} onPress={goBack}/>
        <Text style={[colors.textWhite,{left:110}, text.size_20,text.robotoBold,flex.self_center,{textAlign:"center"}]}>My Profile </Text>
       </View>


       <View style={[flex.row,flex.justify_around, {top:0}, ]}>
       <Image source={profilepic} style={[{width:90,height:90,borderRadius:45}]}/>
        <View style={[flex.column, flex.justify_center, ]}>
        <Text style={[colors.textWhite,{left:10}, text.size_25,text.robotoBold]}>{user.vendorname} </Text>
        <Text style={[colors.textWhite,{left:10}, text.size_15,text.robotoLight]}>{user.location} </Text>
        </View>
       </View>


       <View style={[flex.row, flex.justify_around, {top:20, right:-20}]}>
            <View style={[flex.column, flex.justify_center, ]}> 
            <Text style={[colors.textWhite,{left:10}, text.size_20,text.robotoBold,flex.self_center,{textAlign:"center"}]}>{user.customers}K </Text>
            <Text style={[colors.textWhite,{left:10}, text.size_15,text.robotoLight,flex.self_center,{textAlign:"center"}]}>Customers </Text>
            </View>
            <Text style={[colors.textWhite, text.size_20, marginX.mx_10]}>|</Text>
            <View style={[flex.column, flex.justify_center, ]}>
            <Text style={[colors.textWhite,{left:10}, text.size_20,text.robotoBold,flex.self_center,{textAlign:"center"}]}>{user.reviews} </Text>
            <Text style={[colors.textWhite,{left:10}, text.size_15,text.robotoLight,flex.self_center,{textAlign:"center"}]}>Reviews </Text>
            </View>

            <Text style={[colors.textWhite, text.size_20, marginX.mx_10]}>|</Text>
            
            <View style={[flex.column, flex.justify_center, ]}>
            <Text style={[colors.textWhite,{left:10}, text.size_20,text.robotoBold,flex.self_center,{textAlign:"center"}]}>{user.sales} </Text>
            <Text style={[colors.textWhite,{left:10}, text.size_15,text.robotoLight,flex.self_center,{textAlign:"center"}]}>Sales </Text>
            </View>

            <Text style={[colors.textWhite, text.size_20, marginX.mx_10]}>|</Text>

            <View style={[{right:-10}]}>
            <BtnRoundedPrimaryOutline click={()=>{toSignUp()}} >
            <Text style={[text.robotoBold, text.size_13, colors.textPrimary ]}> Logout</Text>
            </BtnRoundedPrimaryOutline>
            </View>
       </View>
        
       </View>
    )
}

export default TopNavigation