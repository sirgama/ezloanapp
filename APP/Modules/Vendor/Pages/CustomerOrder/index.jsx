import React from 'react';
import { View } from 'react-native';
import TopNavigation from './components/TopNavigation';
import { colors, flex } from '../../../../Styles';
import BodySection from './components/BodySection';

function CustomerOrder(props) {
    return (
        <View style={[flex.flex_1]}>
            <TopNavigation/>
            <BodySection/>


        </View>
    );
}

export default CustomerOrder;