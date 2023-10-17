import { StyleSheet } from "react-native";
import size from "./size";
import family from "./family";

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
  },

  ...family,

  ...size,
});

export default styles;
