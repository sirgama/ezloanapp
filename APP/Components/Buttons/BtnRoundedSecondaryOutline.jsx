import { Pressable } from "react-native";
import { space, border, flex } from "./../../Styles";
import color from "../../Styles/colors/color";

const BtnRoundedSecondaryOutline = ({
  click,
  children,
  mt,mb
}) => {
  return (
    <Pressable
      onPress={click}
      style={[
        border.rounded_20,
        space.py_15,
        flex.items_center,
        flex.justify_center,
        space.w_full,
        {
         
          backgroundColor: "white",
          borderColor: color.secondary,
          borderWidth: 2,
          marginBottom:mb,
          marginTop:mt

        },
      ]}
    >
      {children}
    </Pressable>
  );
};

export default BtnRoundedSecondaryOutline;
