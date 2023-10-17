import { Pressable } from "react-native";
import { space, border, flex } from "../../Styles";
import color from "../../Styles/colors/color";

const BtnRoundedPrimaryOutline = ({
  click,
  children,
  mt,mb
}) => {
  return (
    <Pressable
      onPress={click}
      style={[
        border.rounded_50,
        space.py_10,
        flex.items_center,
        flex.justify_center,
        space.px_20,
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

export default BtnRoundedPrimaryOutline ;
