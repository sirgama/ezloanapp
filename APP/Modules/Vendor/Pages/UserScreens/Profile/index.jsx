import React from 'react'
import { Text, View } from "react-native";
import { flex } from '../../../../../Styles';
import BodySection from './Components/BodySection';

const Profile = () => {
  return (
    <View style={[flex.flex_1, { backgroundColor: "white" }]}>
    <BodySection />
  </View>
  )
}

export default Profile