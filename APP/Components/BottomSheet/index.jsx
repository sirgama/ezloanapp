import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import { colors, flex, shadow, space, text } from '../../Styles';


const BottomSheet = ({ isVisible, onClose,children,height=300,title= "Sort by", closeTxt="Done" }) => {
  const bottomSheetHeight = height; // Customize the height of the bottom sheet
  const [bottomSheetVisible, setBottomSheetVisible] = useState(isVisible);
  const bottomSheetTranslateY = new Animated.Value(
    bottomSheetVisible ? 0 : bottomSheetHeight
  );

  const handleSheetAnimation = () => {
    Animated.spring(bottomSheetTranslateY, {
      toValue: bottomSheetVisible ? 0 : bottomSheetHeight,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    handleSheetAnimation();
  }, [bottomSheetVisible]);

  const handleClose = () => {
    setBottomSheetVisible(false);
    onClose();
  };

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
        backgroundColor: 'white',height:height},
        {
          transform: [{ translateY: bottomSheetTranslateY }],
        },
      ]}
    >
      <View style={[flex.flex_1]}>
        <View style={[flex.row,space.py_5,space.px_10,flex.justify_between]}>
            <Text style={[text.robotoMedium,text.size_20]}>{title}</Text>
            <TouchableOpacity onPress={handleClose} >
            <Text style={[text.robotoRegular,text.size_20,colors.textSecondary]}>{closeTxt}</Text>
        </TouchableOpacity>
        </View>
        {children}
      </View>
      
    </Animated.View>
    </>
  );
};



export default BottomSheet;
