import { Pressable } from "react-native";
import { border, flex, space } from "../../Styles";
import color from "../../Styles/colors/color";


const BtnBlockSecondary = ({bg="secondary", click, children,mt,mb }) => {
  return (
    <Pressable
      onPress={click}
      style={[
        border.rounded_10,
        space.py_15,
        flex.items_center,
        flex.justify_center,
        space.w_full,
        { backgroundColor: color[bg],marginBottom:mb, marginTop:mt },
      ]}
    >
      {children}
    </Pressable>
  );
};

export default BtnBlockSecondary;
