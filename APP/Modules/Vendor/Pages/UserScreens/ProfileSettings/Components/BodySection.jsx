import React, { useContext, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, View,Switch } from "react-native";
import Checkbox from "expo-checkbox";
import signupimg3 from "../../../../../../Assets/Images/signupimg3.png"
import signupimg4 from "../../../../../../Assets/Images/signupimg4.png"
import { border, colors, flex, space, text } from "../../../../../../Styles";
import { AntDesign, Feather, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import buyericon from "../../../../../../Assets/Icons/buyericon.png"
import BtnRoundedPrimary from "../../../../../../Components/Buttons/BtnRoundedPrimary";
import TopNavigation from "./TopNavigation";
import Phone from "../../../../../../Components/Inputs/Phone";
import TextCustomInput from "../../../../../../Components/Inputs/TextCustomInput";
// import { useNavigation } from "@react-navigation/native";
import subtract from "../../../../../../Assets/Images/subtract.png"
import BtnBlockPrimary from "../../../../../../Components/Buttons/BtnBlockPrimary";

import profilepic from '../../../../../../Assets/Images/profilepic.png'


function BodySection(props) {
  const [sales, setSales] = useState(true);
  const [arrivals, setArrivals] = useState(false);
  const [status, setStatus] = useState(false);

  const [phone, setPhone] = useState("");
  const [dial_code, setDialCode] = useState("+254");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSalesToggle = (role) => {
    setSales(role);
  };

  const handleArrivalsToggle = (role) => {
    setArrivals(role);
  };

  const handleStatusToggle = (role) => {
    setStatus(role);
  };
//   const navigation = useNavigation()

  async function submit() {
    'navigation.navigate("SignUpScreen2")'
  }
  const [user, setUser] = useState({
    vendorname: 'Vaite Supplies',
    location: 'Mlango Kubwa opposite Naivas',
    customers: 1.2,
    reviews:392,
    sales: 726,
})

  return (
    <View style={[space.w_full,flex.flex_1]}>
      <TopNavigation/>
      <View style={[flex.align_center,{top:70,width:100},flex.self_center]}>
       <Image source={profilepic} style={[border.radius_50,{width:100,height:100,borderRadius:50,overflow:"hidden"}]}/>
       <MaterialCommunityIcons name="image-edit" color={colors.primary} size={26} style={[{position:"absolute",bottom:0,left:70}]}/>
       </View>
      <View style={[flex.flex_1,{marginTop:30}]}>
      <View style={[flex.flex_1,{marginTop:0}]}>
      <Text style={[text.robotoMedium,text.size_25,flex.self_center]}></Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[space.py_0]}>
      <View style={[space.px_20]}>
          <TextCustomInput
          input={username}
          setInput={setUserName}
          placeholder="Vaite Supplies"
          label=""
          mt={0}
          custom={true}
          children={ <Ionicons name="person-outline" size={24} style={[colors.textCoolGrey]} />}
        />
          <Phone
          input={phone}
          setInput={setPhone}
          dialCode={dial_code}
          setDialCode={setDialCode}
          mt={0}
          label=""
        />
         <TextCustomInput
          input={email}
          setInput={setEmail}
          placeholder="vaite@supplies.com"
          label=""
          mt={0}
          custom={true}
          children={ <Ionicons name="mail-outline" size={24} style={[colors.textCoolGrey]} />}
        />
         <TextCustomInput
          input={password}
          setInput={setPassword}
          placeholder="*********"
          label=""
          mt={0}
          custom={true}
          children={ <Ionicons name="eye-outline" size={24} style={[colors.textCoolGrey]} />}
        />
        </View>
      
      <View style={[space.margin_0,space.py_25, flex.row, flex.justify_between,flex.align_center]}>
                <View style={[colors.bgCoolGrey, ]}/>
                <Text style={[text.robotoMedium,text.size_18,space.w_80,{marginLeft:-10}]}>Notifications</Text>
                <View style={[colors.bgCoolGrey,]}/>
            </View>
     
      <View>
        

        <View>
            <View style={[flex.row,flex.align_center,space.w_full,space.py_0,space.px_20,]}>
                
                <Text style={[text.robotoMedium,text.size_15,space.w_80,space.ml_15]}>Sales</Text>
                <Switch
          style={[{size:30, borderRadius:12 ,borderWidth:1 }]}
          thumbColor={sales == true?colors.primary:colors.chinesewhite}
          value={sales}
          onValueChange={() => handleSalesToggle(!sales)}
        />
            </View>
        </View>

        <View style={[]}>
            <View style={[flex.row,flex.align_center,space.w_full,space.py_0,space.px_20,]}>
               
                <Text style={[text.robotoMedium,text.size_15,space.w_80,space.ml_15]}>New arrivals</Text>
                <Switch
          style={[{size:25, borderRadius:12,borderWidth:1 }]}
          thumbColor={arrivals == true?colors.primary:colors.chinesewhite}
          value={arrivals}
          onValueChange={() => handleArrivalsToggle(!arrivals)}
        />
            </View>
        </View> 

          <View style={[space.mb_20]}>
            <View style={[flex.row,flex.align_center,space.w_full,space.py_0,space.px_20,]}>
               
                <Text style={[text.robotoMedium,text.size_15,space.w_80,space.ml_15]}>Delivery status changes</Text>
                <Switch
          style={[{size:25, borderRadius:12,borderWidth:1,}]}
          thumbColor={status == true?colors.primary:colors.chinesewhite}
          trackColor={status == true?colors.primary:colors.chinesewhite}
          value={status}
          onValueChange={() => handleStatusToggle(!status)}
        />
            </View>
        </View> 


      </View>
      <View style={[space.px_20]}>
      <BtnBlockPrimary click={submit}>
      <Text style={[colors.textWhite,text.robotoMedium,text.size_18]}>Save and exit</Text>
       
      </BtnBlockPrimary>
      </View>
      </View>
      </ScrollView>
      </View>
      
      </View>
    </View>
  );
}

export default BodySection;
