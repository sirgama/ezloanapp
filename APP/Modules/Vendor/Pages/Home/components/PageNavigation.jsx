import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors, flex, shadow, space, text } from '../../../../../Styles';
import Products from './Products';
import Orders from './Orders';

function PageNavigation({orderActive,productActive,handleOrderActive,handleProductActive}) {
  
    
    return (
        <View style={[flex.flex_1]}>
        <View style={[flex.row,flex.justify_around,]}>
            <TouchableOpacity onPress={handleProductActive}>
            <View style={[{borderBottomColor:productActive? colors.primary:"white", borderBottomWidth:3},space.px_20,flex.justify_center]}>
                <Text style={[text.robotoBold, productActive?colors.textBlack:colors.textGrey,text.size_20,space.py_10]}>Products</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOrderActive}>
            <View style={[{borderBottomColor:orderActive? colors.primary:"white", borderBottomWidth:3},space.px_20,flex.justify_center]}>
                <Text style={[text.robotoBold, orderActive?colors.textBlack:colors.textGrey,text.size_20,space.py_10]}>Orders</Text>
            </View>
            </TouchableOpacity>
            
            
        </View>
        {productActive&& <Products/>}
        {orderActive&& <Orders/>}
        </View>
    );
}

export default PageNavigation;