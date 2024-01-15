/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView  } from "react-native";
import { colors, flex, space, text } from "../../../../../Styles";
import BodySection from "./components/BodySection";
import BottomTabNavigation from '../../../Components/BottomTabNavigation';
const Stage = () => {
 
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
      
        <Text style={[text.robotoMedium, text.size_25, colors.textBlack, space.mt_20, text.center, flex.self_center,{textAlign:'center', width:'full', fontWeight:'bold'}]}> Your Applications</Text>
        </View>
    </View>
    <View>
      
      <Text style={[text.robotoMedium, text.size_15, colors.textCoolGrey, text.center, flex.self_center]}> All your loan applications and their progress.</Text>
      </View>

     </View>

     <ScrollView contentContainerStyle={styles.container}>
     <ScrollView style={{
          marginBottom: 100,
        }}> 

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Your Loan Application Progress </Text>
      <View style={styles.stages}>
        <Text style={styles.stageCompleted}>Application Submitted </Text>
        <Text style={styles.stage}>Processing </Text>
        <Text style={styles.stage}>Loan Acceptance </Text>
      </View>
      <Text style={styles.info}>If you want to do re-apply or edit your data, you can do it.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cancel Application</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Your Loan Application Progress </Text>
      <View style={styles.stages}>
        <Text style={styles.stageCompleted}>Application Submitted </Text>
        <Text style={styles.stage}>Processing </Text>
        <Text style={styles.stage}>Loan Acceptance </Text>
      </View>
      <Text style={styles.info}>If you want to do re-apply or edit your data, you can do it.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cancel Application</Text>
      </TouchableOpacity>
    </View>

   
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Your Loan Application Progress </Text>
      <View style={styles.stages}>
        <Text style={styles.stageCompleted}>Application Submitted </Text>
        <Text style={styles.stage}>Processing </Text>
        <Text style={styles.stage}>Loan Acceptance </Text>
      </View>
      <Text style={styles.info}>If you want to do re-apply or edit your data, you can do it.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cancel Application</Text>
      </TouchableOpacity>
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
});

export default Stage;
