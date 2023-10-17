
import React from 'react';
import { View } from 'react-native';
import { colors, flex, space } from '../../../../../../Styles';
import { useNavigation } from '@react-navigation/native';

function TopNavigation(props) {
    const navigation = useNavigation();
    const goBack =()=>{
        navigation.navigate("OnboardingSceen1")
    }
    return (
       <View style={[{position:"absolute",top:30,left:20},flex.justify_center]}>
        {/* <Ionicons name="md-chevron-back-circle" size= {35} color={"black"} style={[flex.self_center, space.mt_20]} onPress={goBack}/> */}
       </View>
    );
}

export default TopNavigation;