import { View, Text } from "react-native";
import { flex, space } from "../../../../../Styles";
import ImageSlider from "./components/ImageSlider";
import BodySection from "./components/BodySection";
const SignUpScreen1 = () => {
  return (
    <View style={[space.h_full,flex.flex_1,{backgroundColor:"white"}]}>
        {/* <ImageSlider/> */}
        <BodySection/>
    </View>
  );
};

export default SignUpScreen1;
