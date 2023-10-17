import { Pressable } from "react-native";
import { border, flex, space } from "../../Styles";
import color from "../../Styles/colors/color";

const BtnRoundedPrimary = ({ click, children,mt,mb }) => {
  return (
    <Pressable
      onPress={click}
      style={[
        border.rounded_20,
        space.py_15,
        flex.items_center,
        flex.justify_center,
        space.w_full,
        { backgroundColor: color.primary, marginBottom:mb,marginTop:mt },
      ]}
    >
      {children}
    </Pressable>
  );

};

export default BtnRoundedPrimary;
