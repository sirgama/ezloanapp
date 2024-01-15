/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput  } from "react-native";
import { colors, flex, space, text } from "../../../../../Styles";
import BodySection from "./components/BodySection";
import BottomTabNavigation from '../../../Components/BottomTabNavigation';
import prof from "../../../../../Assets/Images/supportagent.jpg"
const Support = () => {
  var time = new Date().toLocaleTimeString();


  const messages = [
    {
      sender: 'Daisy',
      text: 'Hello! How can I help you? ',
      time: time,
    },
    // Add more messages here
  ];

  return (

    <View style={[{marginTop:20},space.w_full,flex.flex_1]}>
    <View style={[flex.flex_1,{background: '#FBF4FF', marginTop:10,}]}>
   
    <View style={[{
          display:'flex', flexDirection:'column', justifyContent:'start', marginVertical:30
        }]} >
    <View style={[{
          display:'flex', flexDirection:'row', justifyContent:'start'
        }]}>
    {/* <Ionicons name="md-chevron-back-circle" size= {35} color={"black"} style={[flex.self_start, space.mt_20, space.ml_30]} onPress={goBack}/> */}

        <View style={{width:'100%'}}>
      
        <Text style={[text.robotoMedium, text.size_25, colors.textBlack, space.mt_20, text.center, flex.self_center,{textAlign:'center', width:'full', fontWeight:'bold'}]}> Chat Support </Text>
        </View>
    </View>
    <View>
      
      <Text style={[text.robotoMedium, text.size_15, colors.textCoolGrey, text.center, flex.self_center]}> Get support from our Live agents.</Text>
      </View>

     </View>

     <ScrollView contentContainerStyle={styles.container}>
     <ScrollView style={{
          marginBottom: 100,
        }}> 

    <View style={styles.profileContainer}>
        <Image source={prof} style={styles.profileImage} />
        <Text style={styles.profileName}>Daisy Korir</Text>
        <Text style={styles.profileDetails}> daisy@ezloan.co.ke </Text>
      </View>
    
      <View style={styles.chatContainer}>
        <View style={styles.senderContainer}>
          {/* <Icon name="user-circle" size={30} color="#888" /> */}
          <Text style={styles.senderText}>Daisy</Text>
        </View>
        {messages.map((message, index) => (
          <View key={index} style={styles.messageContainer}>
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.messageTime}>{message.time}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        {/* <Icon name="paperclip" size={20} color="#888" /> */}
        <TextInput style={styles.input} placeholder="Write your message" />
        {/* <Icon name="send" size={20} color="#888" /> */}
      </View>
      <Text style={styles.profileDetails}> Support is currently undergoing maintenance. For assistance, please go to our settings page for contact information or directly send us an email at support@ezloan.co.ke </Text>
    </ScrollView>
    </ScrollView>



<BottomTabNavigation />
  </View>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    marginLeft: 30,
    marginTop: 20
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  stages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  stage: {
    fontSize: 14,
    color: '#888',
  },
  stageCompleted: {
    fontSize: 14,
    color: '#0f0',
  },
  info: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CBC5E',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#000',
    padding: 10,
  },
  navItemSelected: {
    color: '#4CBC5E',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileDetails: {
    fontSize: 16,
    color: '#888',
    textAlign:'center'
  },
  settingsList: {
    padding: 20,
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 18,
  },
  optiondialog: {
    fontSize: 16,
    color: '#4CBC5E',
  },
  chatContainer: {
    flex: 1,
    padding: 20,
  },
  senderContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 20,
  },
  senderText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#888',
  },
  messageContainer: {
    backgroundColor: '#00C853',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
  },
  messageTime: {
    color: '#fff',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    display:"none"
  },
});

export default Support;
