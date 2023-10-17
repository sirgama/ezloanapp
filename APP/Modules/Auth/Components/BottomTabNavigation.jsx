import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { border, colors, flex, shadow, space, text } from '../../../Styles';

import { useNavigation } from '@react-navigation/native';


function BottomTabNavigation(props) {
    
    const [cartCount,setCartCount] =useState(0)
    const navigation = useNavigation();
    const goToCart = () => {
        navigation.navigate('MyKhat')
    }
    return (
       <View style={[flex.row,flex.justify_evenly, {position:"absolute", bottom:0,borderTopRightRadius:0,borderTopLeftRadius:0,elevation:5,backgroundColor:"white"},space.w_full,space.py_10,flex.align_center]}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Vendors")}} style= {[flex.column,flex.align_center,space.ml_15]}>
            {/* <Ionicons name= "home" size={25} color='lightgreen'/> */}
            <Text style={[space.ml_10,text.robotoRegular,colors.textTaupeGray,text.size_16, ]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {[flex.column,flex.align_center,space.ml_20]} onPress={goToCart}>
            <View>
                <View style={[{borderRadius:7.5, height:15,width:15, position:"absolute",right:-5,top:-5},colors.bgSecondary,flex.align_center]}>
                    <Text style={[colors.textWhite,text.size_10]}>{cartCount}</Text>
                </View>
                {/* <Ionicons name= "file-tray-stacked" size={25} color={colors.taupegray}/> */}
            </View>
           
            <Text style={[space.ml_10,text.robotoRegular,colors.textTaupeGray,text.size_16]} >Stage</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("CustomerProfile")}} style= {[flex.column,flex.align_center,space.ml_20]}>
            {/* <Ionicons name= "archive" size={35} color='lightgreen'/> */}
           
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("CustomerProfile")}} style= {[flex.column,flex.align_center,space.ml_15]}>
            {/* <Ionicons name= "mail" size={25} color={colors.taupegray}/> */}
            <Text style={[space.ml_10,text.robotoRegular,colors.textTaupeGray,text.size_16]}>Message </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("CustomerProfile")}} style= {[flex.column,flex.align_center,space.mr_15]}>
            {/* <Ionicons name= "settings" size={25} color={colors.taupegray}/> */}
            <Text style={[space.ml_10,text.robotoRegular,colors.textTaupeGray,text.size_16]}>Settings</Text>
        </TouchableOpacity>

       </View>
    );
}

export default BottomTabNavigation;