import { Pressable } from "react-native";
import { space, border, flex } from "../../Styles";
import color from "../../Styles/colors/color";

const BtnBlockPrimaryOutline = ({
  click,
  children,
  mt,mb
}) => {
  return (
    <Pressable
      onPress={click}
      style={[
        border.rounded_10,
        space.py_15,
        flex.items_center,
        flex.justify_center,
        space.w_full,
        {
         
          backgroundColor: "white",
          borderColor: color.primary,
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

export default BtnBlockPrimaryOutline ;
