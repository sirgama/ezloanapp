import React, { useContext, useState } from "react";
import { Alert, Image, Text, TextInput, View,ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import otpverimg from "../../../../../../Assets/Images/cardbox.png"
import homeloan from "../../../../../../Assets/Images/hml.png"
import carloan from "../../../../../../Assets/Images/crl.png"
import entre from "../../../../../../Assets/Images/rentre.png"
import stdloan from "../../../../../../Assets/Images/stl.png"
import { border, colors, flex, space, text } from "../../../../../../Styles";
import useApp from "../../../../../../Hooks/useapp.hook";
import subtract from "../../../../../../Assets/Images/subtract.png"
import APPCONTEXT from "../../../../../../Context/app.context";

import BottomTabNavigation from "../../../../Components/BottomTabNavigation";
import { useNavigation } from "@react-navigation/native";
function BodySection(props) {

  const navigation = useNavigation()
  const {selectedRole, setSelectedRole} = useContext(APPCONTEXT)
  async function submit() {
    navigation.navigate("LoanSelect")
  }
  const [otp, setOtp] = useState('');
  const {toCustomer} = useApp()
  const services = [
    { label: 'Deposit ', icon: 'ios-cash' },
    { label: 'Saving history ', icon: 'ios-book' },
    { label: 'Loan history ', icon: 'ios-document' },
    { label: 'Mortgage  ', icon: 'ios-calculator' },
    { label: 'Loan Market ', icon: 'ios-briefcase' },
    { label: 'Find us ', icon: 'ios-location' },
    { label: 'Community  ', icon: 'logo-facebook' },
    { label: 'Group  ', icon: 'logo-whatsapp' },
  ];
 

  const updateOtp = (index, value) => {
    const newOtp = otp.substring(0, index) + value + otp.substring(index + 1);
    setOtp(newOtp);
  };
  const goBack =()=>{
    navigation.navigate("OtpVerification")

}


  return (
    <View style={[space.w_full,flex.flex_1,{background: '#FBF4FF'}]}>

   
      <View style={[flex.flex_1,{background: '#FBF4FF', marginTop:10,}]}>
      <Image source={subtract} style={[{marginTop:-43,resizeMode:"stretch",position:"absolute"},space.w_full]}/>

     <View style={[{
          display:'flex', flexDirection:'row', justifyContent:'start', marginVertical:30
        }]} >
    <View style={[{
          display:'flex', flexDirection:'column', justifyContent:'start'
        }]}>
    {/* <Ionicons name="md-chevron-back-circle" size= {35} color={"black"} style={[flex.self_start, space.mt_20, space.ml_30]} onPress={goBack}/> */}

        <View>
      
        <Text style={[text.robotoBold, text.size_25, colors.textPrimary, space.mt_20,space.ml_30, {fontWeight:'bold', textAlign:'center'}]}> Please select a loan you want to apply </Text>
        </View>
    </View>

     </View>


        
    <ScrollView contentContainerStyle={styles.container}>

<View style={{
          marginBottom: 100,
        
        }}>
          <TouchableOpacity onPress={()=>navigation.navigate("LoanForm")}>
        <ImageBackground
      source={entre} // Replace with your image source
      style={styles.backgroundImage}
    >
        <View style={{
          marginTop: 0,
          paddingHorizontal: 30,
          height: 100,
    justifyContent: 'center',
    
    alignItems: 'center',
    borderRadius:150,
        }}>
          
          <Text style={{ color: "white", fontSize: 31, letterSpacing:3, fontWeight: "bold", paddingTop: 0, }}>Entrepreneur Loan</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate("LoanForm")}>
        <ImageBackground
      source={homeloan} // Replace with your image source
      style={styles.backgroundImage}
    >
        <View style={{
          marginTop: 0,
          paddingHorizontal: 30,
          height: 100,
    justifyContent: 'center',
    
    alignItems: 'center',
    borderRadius:150,
        }}>
          
          <Text style={{ color: "white", fontSize: 31, letterSpacing:3, fontWeight: "bold", paddingTop: 0, }}>Home Loan</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate("LoanForm")}>
        <ImageBackground
      source={carloan} // Replace with your image source
      style={styles.backgroundImage}
    >
        <View style={{
          marginTop: 0,
          paddingHorizontal: 30,
          height: 100,
    justifyContent: 'center',
    
    alignItems: 'center',
    borderRadius:150,
        }}>
          
          <Text style={{ color: "white", fontSize: 31, letterSpacing:3, fontWeight: "bold", paddingTop: 0, }}>Car Loan</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate("LoanForm")}>
        <ImageBackground
      source={stdloan} // Replace with your image source
      style={styles.backgroundImage}
    >
        <View style={{
          marginTop: 0,
          paddingHorizontal: 30,
          height: 100,
    justifyContent: 'center',
    
    alignItems: 'center',
    borderRadius:150,
        }}>
          
          <Text style={{ color: "white", fontSize: 31, letterSpacing:3, fontWeight: "bold", paddingTop: 0, }}>Student Loan</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>
</View>
    </ScrollView>
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
    paddingVertical: 40,
    marginLeft: 20,
    borderRadius:150,
    marginVertical: 20
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // You can adjust the opacity by changing the last value
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:150,
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
    marginBottom:130
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
  },
});


export default BodySection;
