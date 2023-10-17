/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { Alert, Image, Text, TextInput, View,ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Button } from "react-native";
import {Picker} from '@react-native-picker/picker';
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
import TextCustomInput from "../../../../../../Components/Inputs/TextCustomInput";
import DropSelect from '../../../../../../Components/Inputs/DropSelect'
import Numeric from '../../../../../../Components/Inputs/Numeric'
import BtnRoundedPrimary from "../../../../../../Components/Buttons/BtnRoundedPrimary";
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';






const options = [
  { label: "", value: "" },
  { label: "3 Months", value: "3" },
  { label: "6 Months", value: "6" },
  { label: "9 Months", value: "9" },
  { label: "12 Months", value: "12" },
];

const loantype = [
  { label: "", value: "" },
  { label: "Home Loan", value: "home" },
  { label: "Entrepreneurship Loan", value: "business" },
  { label: "Student Loan", value: "student" },
  { label: "Car Loan", value: "car" },
];

function BodySection(props) {


  
  const navigation = useNavigation()
  const {selectedRole, setSelectedRole} = useContext(APPCONTEXT)
  async function submit() {
    navigation.navigate("LoanSelect")
  }
  const [otp, setOtp] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idPassport, setIdPassport] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [selectedRepaymentPeriod, setSelectedRepaymentPeriod] = useState('3');
  const [selectedLoan, setSelectedLoan] = useState('car');



  const updateOtp = (index, value) => {
    const newOtp = otp.substring(0, index) + value + otp.substring(index + 1);
    setOtp(newOtp);
  };
  const goBack =()=>{
    navigation.navigate("OtpVerification")

}

  async function submit() {
    // RNImmediatePhoneCall.immediatePhoneCall('0795680980');
    // SendIntentAndroid.sendPhoneCall("0795680980", false);
    call(args).catch(console.error)
  }

  return (
    <View style={[space.w_full,flex.flex_1,{background: '#FBF4FF'}]}>

   
      <View style={[flex.flex_1,{background: '#FBF4FF', marginTop:10,}]}>
      <Image source={subtract} style={[{marginTop:-43,resizeMode:"stretch",position:"absolute"},space.w_full]}/>

     <View style={[{
          display:'flex', flexDirection:'column', justifyContent:'start', marginVertical:30
        }]} >
    <View style={[{
          display:'flex', flexDirection:'row', justifyContent:'start'
        }]}>
    {/* <Ionicons name="md-chevron-back-circle" size= {35} color={"black"} style={[flex.self_start, space.mt_20, space.ml_30]} onPress={goBack}/> */}

        <View>
      
        <Text style={[text.robotoMedium, text.size_25, colors.textBlack, space.mt_20,space.ml_30, text.center, flex.self_center]}> Loan Application Form</Text>
        </View>
    </View>
    <View>
      
      <Text style={[text.robotoMedium, text.size_15, colors.textCoolGrey,space.ml_30, text.center, flex.self_center]}> Let's get started! First fill in your details.</Text>
      </View>

     </View>


        
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView style={{
          marginBottom: 100,
        }}>


          <View style={[space.px_0]}>
            <DropSelect
            input={selectedLoan}
            setInput={setSelectedLoan}
            placeholder=""
            label="Which loan are you asking for? (required) "
            items={loantype}
            mt={10}
            custom={true}
            children={ ''}
          />
        
          </View>


          <View style={[space.px_0]}>
            <TextCustomInput
            input={fullName}
            setInput={setFullName}
            placeholder="Full name "
            label="What is your Full Name as appears on your ID (required) "
            mt={10}
            custom={true}
            children={ ''}
          />
        
          </View>

        <View style={[space.px_0]}>
            <TextCustomInput
            input={phoneNumber}
            setInput={setPhoneNumber}
            placeholder="Phone Number"
            label="What is your Phone number (required) "
            mt={10}
            custom={true}
            children={ ''}
          />
        
          </View>

          <View style={[space.px_0]}>
            <TextCustomInput
            input={email}
            setInput={setEmail}
            placeholder="Email Address"
            label="What is your Email Address (required) "
            mt={10}
            custom={true}
            children={ ''}
          />
        
          </View>

      

          <View style={[space.px_0]}>
            <Numeric
            input={loanAmount}
            setInput={setLoanAmount}
            placeholder="Amount Requesting"
            label="What amount are you requesting? (required) "
            mt={10}
            custom={true}
            children={ ''}
          />
        
          </View>


          <View style={[space.px_0]}>
            <DropSelect
            input={selectedRepaymentPeriod}
            setInput={setSelectedRepaymentPeriod}
            placeholder=""
            label="What is your prefered repayment period (required) "
            items={options}
            mt={10}
            custom={true}
            children={ ''}
          />
        
          </View>

        <View style={[space.my_50]}>
        <BtnRoundedPrimary click={submit}>
         
         <Text style={[colors.textFlashWhite,text.robotoMedium,text.size_18]}>Submit Application</Text>
        
       </BtnRoundedPrimary>
        </View>



      </ScrollView>
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
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#E6E5FF', // You can adjust the opacity by changing the last value
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
    backgroundColor: '#E6E5FF',
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
    backgroundColor: '#FBF4FF',
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FBF4FF',
  },
  input: {
    height: 40,
    borderColor: '#6765E8',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: '#6765E8',
  },
  picker: {
    height: 40,
    borderColor: '#6765E8',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});


export default BodySection;
