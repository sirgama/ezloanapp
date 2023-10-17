import React, { useEffect } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import BasicModal from "./BasicModal";


import { space, text, flex, colors, border } from "../../Styles";
import BtnBlockPrimary from "../Buttons/BtnBlockPrimary";
import color from "../../Styles/colors/color";
import confirmpopupimg from "../../Assets/Images/confirmpopupimage.png"

const defaults = {
  primaryText: "Primary Text",
  color: "goGreen",
  secondaryText: "Secondary Text",
  btnText: "Done",
  singleCustomVisible: false,
  image:confirmpopupimg 
};

const CustomPopUpSingle = ({ input = {}, setInput = () => {}, bg="white" }) => {
  let s = 65;

  useEffect(() => {
    setInput({ ...defaults, ...input });
  }, []);

  function handleCallBack() {
    if (input.callBack) {
      input.callBack();
      return;
    }
    setInput({ ...input, singleCustomVisible: false });
  }

  return (
    <BasicModal isVisible={input.singleCustomVisible}>
      <View
        style={[
          {backgroundColor: color[bg]},
          border.rounded_15,
          space.px_40,
          space.py_30,
        ]}
      >
      <View style={[{position:"absolute", top:-15, right:-10}]}>
        {/* <AntDesign name ="closecircle" size={24} onPress={handleCallBack} color={"white"}/> */}
        </View>
        <Text
          style={[
            flex.self_center,
            space.mb_30,
            text.robotoBold,
            text.size_24,
            colors.textPrimary
            // { color: colors[input.color || colors.textPrimary] },
          ]}
        >
          {input.primaryText || "Primary Text"}
        </Text>


         <View style={[flex.self_center,space.mt_10]}>
         <Image source={input.image} resizeMode="contain"/>
         </View>
         

        <Text
          style={[
            flex.self_center,
            space.mb_30,
            text.robotoBold,
            text.size_18,
            space.mt_10,
            { color: colors.coolgrey,textAlign:"center" },
          ]}
        >
          {input.secondaryText || "Secondary Text"}
        </Text>

        <BtnBlockPrimary click={handleCallBack}>
          <Text
            style={[text.robotoBold, text.size_18, { color: "white" }]}
          >
            {input.btnText || "Done"}
          </Text>
        </BtnBlockPrimary>
      </View>
    </BasicModal>
  );
};

export default CustomPopUpSingle;
