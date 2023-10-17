import { StyleSheet } from "react-native";
import padding from "./padding";
import margin_top from "./margin_top";
import margin_right from "./margin_right";
import margin_left from "./margin_left";
import margin_Bottom from "./margin_bottom";

import margin from "./margin";
import marginX from "./marginX";
import marginY from "./marginY";

import height from "./height";
import width from "./width";

const styles = StyleSheet.create({
  ...margin,
  ...margin_top,
  ...margin_right,
  ...margin_left,
  ...margin_Bottom,
  ...marginX,
  ...marginY,
  ...padding,
  ...height,
  ...width,
});

export default styles;
