/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Image  } from "react-native";
import { colors, flex, space, text } from "../../../../../Styles";
import BodySection from "./components/BodySection";
import BottomTabNavigation from '../../../Components/BottomTabNavigation';
import prof from "../../../../../Assets/Images/prof.png"
const Settingspage = () => {
  
  const settingsOptions = [
    
    'Notifications ',
    'Language ',
    'Theme ',
    'Help & Support ',
    'Contact us ',
    'Privacy policy '
  ];

  const options = [
    {
      name: 'Notifications ',
      status: 'on'
    },
    {
      name: 'Language ',
      status: 'English '
    },
    {
      name: 'Theme ',
      status: 'Light '
    },
    {
      name: 'Help and Support ',
      status: 'appezloan@gmail.com '
    },
    {
      name: 'Contact us ',
      status: '+254 723 690 789 '
    },
    {
      name: 'Privacy Policy ',
      status: 'ezloan.co.ke/privacy '
    },
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
      
        <Text style={[text.robotoMedium, text.size_25, colors.textBlack, space.mt_20, text.center, flex.self_center,{textAlign:'center', width:'full', fontWeight:'bold'}]}> Settings </Text>
        </View>
    </View>
    <View>
      
      <Text style={[text.robotoMedium, text.size_15, colors.textCoolGrey, text.center, flex.self_center]}> Change or modify your settings here.</Text>
      </View>

     </View>

     <ScrollView contentContainerStyle={styles.container}>
     <ScrollView style={{
          marginBottom: 100,
        }}> 

    <View style={styles.profileContainer}>
        <Image source={prof} style={styles.profileImage} />
        {/* <Text style={styles.profileName}>Aung Aung</Text> */}
        <Text style={styles.profileDetails}> aungaung@test.com </Text>
      </View>
      <View style={styles.settingsList}>
        {options.map((option, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.optionContainer}>
              <Text style={styles.optionText}>{option.name}</Text>
              <Text style={styles.optiondialog}>{option.status}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
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
});

export default Settingspage;
