import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { border, colors, flex, shadow, space, text } from '../../../../../../Styles';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
const TopNavigation = ()=>{
    const navigation = useNavigation();
    const goBack = () => {
      navigation.navigate("Profile");
    };
    return (
      <View
        style={[
          flex.row,
          space.w_full,
          space.px_10,
          { height: 60 },
          flex.align_center,
          colors.bgWhite,
        ]}
      >
        <TouchableOpacity
          style={[
            { backgroundColor: "white", height: 40, width: 40, borderRadius: 20 },
            flex.align_center,
            flex.justify_center,
            shadow.shadow1,
          ]}
          onPress={goBack}
        >
          <Ionicons
            name="chevron-back-sharp"
            size={25}
            color={"black"}
            style={[flex.self_center]}
           
          />
        </TouchableOpacity>
  
        <Text style={[text.size_25, colors.textPrimary, text.robotoBold,{marginLeft:100}]}>
          My Reviews
        </Text>

      </View>
    )
}
export default TopNavigation;