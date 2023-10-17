import React from 'react';
import BodySection from './components/BodySection';
import { flex, space } from '../../../../../Styles';
import { View } from 'react-native';

function OtpVerification(props) {
    return (
       <View style ={[flex.flex_1 ,{background: '#FBF4FF'}]}>
        <BodySection/>
       </View>
    );
}

export default OtpVerification;