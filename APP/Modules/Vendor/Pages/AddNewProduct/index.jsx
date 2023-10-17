import React from 'react';
import TopNavigation from './components/TopNavigation';
import { View } from 'react-native';
import BodySection from './components/BodySection';
import { flex } from '../../../../Styles';

function AddNewProduct(props) {
    return (
        <View style={[flex.flex_1]}>
            <TopNavigation/>
            <BodySection/>
        </View>
    );
}

export default AddNewProduct;