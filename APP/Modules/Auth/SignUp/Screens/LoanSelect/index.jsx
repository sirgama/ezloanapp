import React from 'react';
import BodySection from './components/BodySection';
import { flex, space } from '../../../../../Styles';
import { View } from 'react-native';

function LoanSelect(props) {
    return (
       <View style ={[flex.flex_1, { backgroundColor: "white" }]}>
        <BodySection/>
       </View>
    );
}

export default LoanSelect;