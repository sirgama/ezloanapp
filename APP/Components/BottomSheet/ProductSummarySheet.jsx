import { AntDesign, Entypo } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import { colors, flex, shadow, space, text } from '../../Styles';
import { useNavigation } from '@react-navigation/core';


const ProductSummarySheet = ({ isVisible, onClose,children,height=400,title= "Product Summary",handleMoreInfo }) => {
  const bottomSheetHeight = height; // Customize the height of the bottom sheet
  const [bottomSheetVisible, setBottomSheetVisible] = useState(isVisible);
  const bottomSheetTranslateY = new Animated.Value(
    bottomSheetVisible ? 0 : bottomSheetHeight
  );
  const navigation = useNavigation()

  const handleSheetAnimation = () => {
    Animated.spring(bottomSheetTranslateY, {
      toValue: bottomSheetVisible ? 0 : bottomSheetHeight,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    handleSheetAnimation();
  }, [bottomSheetVisible]);



  const handleClose= ()=>{
    setBottomSheetVisible(false);
    onClose();
  }
  return (
    <>
    {isVisible && <View style={{position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.5,}
} />}
    <Animated.View
      style={[shadow.shadow1,{    
        bottom: 0,
        borderTopEndRadius:20,
        borderTopStartRadius:20,
        backgroundColor: 'white',height:height},
        {
          transform: [{ translateY: bottomSheetTranslateY }],
        },
      ]}
    >
      <View style={[flex.flex_1]}>
        <TouchableOpacity onPress={handleClose} style={[space.w_full,space.py_10,flex.justify_center,flex.align_center]}><View style={[{width:50,height:2,backgroundColor:colors.taupegray}]} /></TouchableOpacity>
        <View style={[flex.row,space.py_5,space.px_10,flex.justify_between]}>
            <Text style={[text.robotoMedium,text.size_18]}>{title}</Text>
            <TouchableOpacity onPress={handleMoreInfo} style={[flex.row,flex.align_center]} >
                <Entypo name='info-with-circle' size={18} color={colors.secondary}/>
            <Text style={[text.robotoRegular,text.size_15,colors.textSecondary,space.mr_10,space.ml_5]}>more info</Text>
        </TouchableOpacity>
        </View>
        {children}
      </View>
      
    </Animated.View>
    </>
  );
};



export default ProductSummarySheet;
