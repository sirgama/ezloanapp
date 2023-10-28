import React, { useContext, useState } from "react";
import { Alert, Image, Text, TextInput, View,ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import otpverimg from "../../../../../../Assets/Images/cardbox.png"
import prof from "../../../../../../Assets/Images/prof.png"
import telegram from "../../../../../../Assets/Images/telegram.png"
import deposit from "../../../../../../Assets/Images/deposit.png"
import request from "../../../../../../Assets/Images/request.png"
import inout from "../../../../../../Assets/Images/inout.png"
import saving from "../../../../../../Assets/Images/saving.png"
import loan from "../../../../../../Assets/Images/loan.png"
import mortgage from "../../../../../../Assets/Images/mortgage.png"
import facebook from "../../../../../../Assets/Images/facebook.png"
import cart from "../../../../../../Assets/Images/market.png"
import find from "../../../../../../Assets/Images/find.png"
import { border, colors, flex, space, text } from "../../../../../../Styles";
import useApp from "../../../../../../Hooks/useapp.hook";
import subtract from "../../../../../../Assets/Images/subtract.png"
import APPCONTEXT from "../../../../../../Context/app.context";

import BottomTabNavigation from "../../../../Components/BottomTabNavigation";
import { useNavigation } from "@react-navigation/native";
function BodySection(props) {
  const navigation = useNavigation()
  const {selectedRole, setSelectedRole} = useContext(APPCONTEXT)

  const [otp, setOtp] = useState('');
  const {toVendor,toCustomer,toRider} = useApp()
  const services = [
    { label: 'Deposit ', icon: deposit },
    { label: 'Saving history ', icon: saving },
    { label: 'Loan history ', icon: loan },
    { label: 'Mortgage  ', icon: mortgage },
    { label: 'Loan Market ', icon: cart },
    { label: 'Find us ', icon: find },
    { label: 'Community  ', icon: facebook },
    { label: 'Group  ', icon: telegram },
  ];
 

  const updateOtp = (index, value) => {
    const newOtp = otp.substring(0, index) + value + otp.substring(index + 1);
    setOtp(newOtp);
  };
  const goBack =()=>{
    // navigation.navigate("SignUpScreen2")
    Alert('Hi')
}

  async function submit() {
    if (selectedRole == "Buyer"){
      toCustomer()
    }else if (selectedRole == "Vendor"){
      toVendor()
    }else{
      toRider()
    }
    
  }

  return (
    <View style={[space.w_full,flex.flex_1, colors.bgSecondary]}>

   
      <View style={[flex.flex_1, colors.bgSecondary,{ marginTop:10,}]}>
      <Image source={subtract} style={[{marginTop:-43,resizeMode:"stretch",position:"absolute"},space.w_full]}/>

     <View style={[{
          display:'flex', flexDirection:'row', justifyContent:'space-between', marginVertical:30
        }]} >
    <View style={[{
          display:'flex', flexDirection:'row', justifyContent:'space-between'
        }]}>
    <View style={[space.ml_10,{
          width: 60,
          height: 60,
          borderRadius: 50,
          borderWidth: 2,
          borderColor:'lightgreen',
          backgroundColor: "lightgray",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,

        }]}>
          <Image source={prof} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
        </View>

        <View>
        <Text style={[space.mt_20, text.robotoBlack, text.size_20, space.ml_10,{color:'black', fontWeight:'bold'}]}>Angie Kwechi</Text>
        <Text style={[text.robotoBold, text.size_15, colors.textCoolGrey, space.ml_10]}>Silver Member</Text>
        </View>
    </View>

        {/* Notification Bell */}
        <View style={{ position: "absolute", top: 10, right: 20 }}>
        {/* <EvilIcons name="bell" size= {45} color={"gray"} style={[flex.self_center, space.mt_10]} onPress={goBack}/> */}
        </View>
     </View>

        {/* <ImageBackground
      source={otpverimg} // Replace with your image source
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Your Text Goes Here</Text>
      </View>
    </ImageBackground> */}

        {/* Purple Card */}
     

       
        
        
    <ScrollView contentContainerStyle={styles.container}>

    <ImageBackground
      source={otpverimg} // Replace with your image source
      style={styles.backgroundImage}
    >
        <View style={{
          marginTop: 0,
          marginVertical: 20,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius:130,
    justifyContent: 'start',
    
    alignItems: 'start',
        }}>
          
          <Text style={{ color: "white", fontSize: 21, letterSpacing:3, fontWeight: "bold", paddingTop: 0, }}>Angie Kwechi</Text>
          <Text style={{ color: "white", fontSize: 21, letterSpacing:3}}>341X**** **** **** X016</Text>
         
          <Text style={{ color: "white", fontSize: 18,  marginTop: 10, letterSpacing:3, }}>Your Credit balance</Text>
          <Text style={{ color: "white", fontSize: 18, letterSpacing:3, }}>**** KES</Text>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20, padding: 10, backgroundColor: 'white', width: '90%', borderRadius: 20 }}>
  {/* First Icon */}
  <View style={{ alignItems: 'center' }}>
    <View style={{ backgroundColor: 'lightgreen', width: 60, height: 60, borderRadius: 50, justifyContent: 'center', alignItems: 'center', position: 'relative',paddingBottom:10 }}>
    <Image source={telegram} style={{ width: "50%", height: "50%", resizeMode: "cover" }} />
    </View>
    <Text style={{ color: "lightgreen",  fontWeight: "bold",  }}>Transfer </Text>
  </View>

  {/* Second Icon */}
  <View style={{ alignItems: 'center', paddingHorizontal: 30 }}>
    <View style={{ backgroundColor: 'lightgreen', width: 60, height: 60, borderRadius: 50, justifyContent: 'center', alignItems: 'center', position: 'relative',  }}>
    <Image source={request} style={{ width: "50%", height: "50%", resizeMode: "cover" }} />
    </View>
    <Text style={{ color: "lightgreen",  fontWeight: "bold",  }} >Request </Text>
  </View>

  {/* Third Icon */}
  <View style={{ alignItems: 'center' }}>
    <View style={{ backgroundColor: 'lightgreen', width: 60, height: 60, borderRadius: 50, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
    <Image source={inout} style={{ width: "50%", height: "50%", resizeMode: "cover" }} />
    </View>
    <Text style={{ color: "lightgreen",  fontWeight: "bold",  }} >In & Out </Text>
  </View>
</View>
          
        </View>

        </ImageBackground>

    <View style={styles.cardContainer}>
      <Text style={styles.title}>Request a loan</Text>
      <Text style={styles.description}>
        Need some cash for your errands, you can make a request
      </Text>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("LoanSelect")}>
        <Text style={styles.buttonText}>Create application</Text>
      </TouchableOpacity>
    </View>
<View style={{ marginBottom: 40}}>
<Text style={styles.tittext}>Services</Text>
<View style={styles.row}>
        {services.slice(0, 4).map((service, index) => (
          <View key={index} style={styles.serviceItem}>
            <View style={styles.iconContainer}>
            <Image source={service.icon} style={{ width: "50%", height: "50%", resizeMode: "cover" }} />
            </View>
            <Text style={styles.label}>{service.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {services.slice(4).map((service, index) => (
          <View key={index} style={styles.serviceItem}>
            <View style={styles.iconContainer}>
            <Image source={service.icon} style={{ width: "50%", height: "50%", resizeMode: "cover" }} />
            </View>
            <Text style={styles.label}>{service.label}</Text>
          </View>
        ))}
      </View>
</View>
    </ScrollView>




        
        <View style={[flex.row,space.mt_20]}>
        <Text style={[text.robotoLight,text.size_16,colors.textCoolGrey]}></Text>
        <Text style={[space.ml_10,text.robotoRegular,text.size_16,colors.textSecondary]}></Text>
        </View>
        <View style={[space.px_40,space.w_full]}>
     
        </View>
       <BottomTabNavigation />
      
      </View>
    </View>

    
  );

  
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover', // You can use 'contain' or 'stretch' depending on your image
    justifyContent: 'center', 
    width:"95%",
    paddingHorizontal: 0,
    marginLeft: 20,
    
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // You can adjust the opacity by changing the last value
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: '#4CBC5E',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  tittext : {
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    color: 'black',
  },
  container: {
    backgroundColor: 'white',
    // padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  serviceItem: {
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'lightgreen',
    width: 80,
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: 'transparent',
    
  },
  label: {
    marginTop: 10,
    textAlign: 'center',
    color:'black',
  },
});


export default BodySection;
