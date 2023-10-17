import React from 'react';
import BodySection from './components/BodySection';
import { flex, space } from '../../../../../Styles';
import { View } from 'react-native';

function LoanForm(props) {
    return (
       <View style ={[flex.flex_1, ]}>
        <BodySection/>
       </View>
    );
}

export default LoanForm;