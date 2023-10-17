import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { colors, flex, text, space, border } from "../../../../Styles";
import cuswelcome from "../../../../Assets/Images/cuswelcome.png";
import subtract from "../../../../Assets/Images/subtract.png";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import menuwhite from "../../../../Assets/Icons/menuwhite.png"
import miraa from "../../../../Assets/Images/miraa.png"
import accompaniments from "../../../../Assets/Images/accompaniments.png"
import deals from "../../../../Assets/Images/deals.png"
import favoriteven from "../../../../Assets/Images/favoriteven.png";
import bottomlogo from "../../../../Assets/Images/bottomlogo.png"

function WelcomeScreen(props) {
  return (
    <View style={[flex.flex_1]}>
    <View>
      
      <View style={[{ maxHeight: 250 }, space.w_full]}>
        <Image source={cuswelcome} resizeMode="cover" style={[space.w_full]} />
      </View>
      <View
        style={[
          { position: "absolute", top: 50 },
          flex.align_center,
          space.w_full,
        ]}
      >

        <View style={[flex.row,flex.justify_between,space.w_full,space.px_20,]}>
        <Image source={menuwhite} resizeMode="contain"/>
        <Fontisto name='share' color={"white"} size={25}/>

        </View>


        <Text
          style={[
            colors.textWhite,
            text.size_25,
            text.robotoBold,
            flex.self_center,
            space.mt_20,
            { textAlign: "center" },
          ]}
        >
          Karibu Session. {"\n"} What are you looking for today?
        </Text>
      </View>
      <View
        style={[flex.align_center, { backgroundColor: "white", marginTop: 20 }]}
      >
        
        <Image
          source={subtract}
          style={[
            { marginTop: -42, resizeMode: "stretch", position: "absolute" },
            space.w_full,
          ]}
        />
        

        <Text style={[text.size_18,colors.textTaupeGray]}>Pick a category</Text>
        <View style={[space.px_10,space.w_full,space.mt_20,]}>
        <TouchableOpacity style={[flex.row,flex.align_center,flex.justify_between,space.w_full,border.rounded_10,{borderWidth:1, borderColor:"#70BF4433"}]}>
          <Text style={[space.ml_20,text.robotoBold,text.size_20]}>Miraa</Text>
          <Image source={miraa} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity style={[space.mt_20,flex.row,flex.align_center,flex.justify_between,space.w_full,border.rounded_10,{borderWidth:1, borderColor:"#70BF4433"}]}>
          <Text style={[space.ml_20,text.robotoBold,text.size_20]}>Accompaniments</Text>
          <Image source={accompaniments} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity style={[space.mt_20,flex.row,flex.align_center,flex.justify_between,space.w_full,border.rounded_10,{borderWidth:1, borderColor:"#70BF4433"}]}>
          <Text style={[space.ml_20,text.robotoBold,text.size_20]}>Deals</Text>
          <Image source={deals} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity style={[space.mt_20,flex.row,flex.align_center,flex.justify_between,space.w_full,border.rounded_10,{borderWidth:1, borderColor:"#70BF4433"}]}>
          <Text style={[space.ml_20,text.robotoBold,text.size_20]}>Favourite</Text>
          <Image source={favoriteven} resizeMode="contain"/>
        </TouchableOpacity>
        </View>
      </View>
         
    </View>
    <Image source={bottomlogo} style={[flex.self_center,{position:"absolute",bottom:10}]}/>
    </View>
  );
}

export default WelcomeScreen;
