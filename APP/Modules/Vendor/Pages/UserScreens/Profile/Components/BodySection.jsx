import React, { useContext, useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { space, colors, flex, text } from "../../../../../../Styles";
import TopNavigation from "./TopNavigation";
import BtnBlockPrimary from "../../../../../../Components/Buttons/BtnBlockPrimary";
import useApp from "../../../../../../Hooks/useapp.hook";
import subtract from "../../../../../../Assets/Images/subtract.png";
import profheader from "../../../../../../Assets/Images/profheader.png";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BodySection = (props) => {
  const navigation = useNavigation();
  const {toSignUp} = useApp()
  const [state,setState] = useState(true)

  return (
    <View style={[space.w_full, flex.flex_1]}>

      <View>
        <View style={[{ maxHeight: 350 }, space.w_full]}>
          <Image
            source={profheader}
            resizeMode="cover"
            style={[space.w_full]}
          />
          <TopNavigation />
        </View>

        <View
          style={[
            flex.align_center,
            { backgroundColor: "white", marginTop: 20 },
          ]}
        >
          <Image
            source={subtract}
            style={[
              { marginTop: -42, resizeMode: "stretch", position: "absolute" },
              space.w_full,
            ]}
          />

          <ScrollView>
          <TouchableOpacity style={[ space.my_0,]} onPress={()=>{navigation.navigate("")}}>
              <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
                <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > My Wallet </Text>
                <Text style={[flex.column,flex.align_center, {left:50, top: 10}]}>
                <Ionicons name="md-chevron-forward" size={25} color={"gray"}style={[flex.self_end]}/> </Text>
              </View>
              <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.mb_10, ]} > Balance Kshs 10,000.00 </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[ space.my_0,]} onPress={()=>{navigation.navigate("Home",{data:true})}}>
              <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
                <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > Orders </Text>
                <Text style={[flex.column,flex.align_center, {left:50, top: 10}]}>
                <Ionicons name="md-chevron-forward" size={25} color={"gray"}style={[flex.self_end]} /> </Text>
              </View>
              <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.mb_10, ]} > 3 addresses</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[ space.my_0,]}>
              <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
                <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > Promocodes and Referrals </Text>
                <Text style={[flex.column,flex.align_center, {left:50, top: 10}]}>
                <Ionicons name="md-chevron-forward" size={25} color={"gray"}style={[flex.self_end]} /> </Text>
              </View>
              <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.mb_10, ]} > You have special promocodes </Text>
           
           </TouchableOpacity>

            <TouchableOpacity style={[ space.my_0,]} onPress={()=>{navigation.navigate("MyReviews")}}>
              <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
                <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > My Reviews </Text>
                <Text style={[flex.column,flex.align_center, {left:50, top: 10}]}>
                <Ionicons name="md-chevron-forward" size={25} color={"gray"}style={[flex.self_end]}  /> </Text>
              </View>
              <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.mb_10, ]} > Reviews for 4 items  </Text>
           </TouchableOpacity>

            <TouchableOpacity style={[ space.my_0,]} onPress={()=>{navigation.navigate("ProfileSettings")}}>
              <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
                <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > Settings </Text>
                <Text style={[flex.column,flex.align_center, {left:50, top: 10}]}>
                <Ionicons name="md-chevron-forward" size={25} color={"gray"}style={[flex.self_end]}  /> </Text>
              </View>
              <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.mb_10, ]} > Notifications, Password </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[ space.my_0,]} onPress={()=>{navigation.navigate("ContactChat")}}>
              <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
                <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > Contact/Help </Text>
                <Text style={[flex.column,flex.align_center, {left:50, top: 10}]}>
                <Ionicons name="md-chevron-forward" size={25} color={"gray"}style={[flex.self_end]} /> </Text>
              </View>
              <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.mb_10, ]} > Contact Support for general inquiries</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[ space.my_0,]} onPress={()=>{toSignUp()}}>
              <View style={[ flex.row, flex.self_start, space.w_full, space.py_10, space.px_0,]} >
                <Text style={[ text.robotoBold, text.size_18, space.w_80, space.ml_0, ]} > Logout </Text>
                <Text style={[flex.column,flex.align_center, {left:50, top: 10}]}>
                <Ionicons name="md-chevron-forward" size={25} color={"gray"}style={[flex.self_end]} onPress={()=>alert("I've been pressed")} /> </Text>
              </View>
              <Text style={[ space.mt_0, space.px_0, text.robotoRegular, colors.textCoolGrey,text.size_13, space.mb_10, ]} > Logout from the app</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default BodySection;
