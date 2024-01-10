import { View, Text } from "react-native";
import { flex, space } from "../../../../../Styles";
import BodySection from "./components/BodySection";
const Stage = () => {
  return (
    <View style={[space.h_full,flex.flex_1,{backgroundColor:"white"}]}>
       
        <BodySection/>
    </View>
  );
};

export default Stage;
