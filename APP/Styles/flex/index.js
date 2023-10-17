import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: {
    display: "flex",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
  },
  row_reverse: {
    flexDirection: "row-reverse",
  },
  column: {
    flexDirection: "column",
  },

  column_reverse: {
    flexDirection: "column-reverse",
  },

  flex_1: {
    flex: 1,
  },

  justify_center: {
    justifyContent: "center",
  },
  justify_evenly: {
    justifyContent: "space-evenly",
  },
  justify_around: {
    justifyContent: "space-around",
  },
  justify_between: {
    justifyContent: "space-between",
  },
  justify_start: {
    justifyContent: "flex-start",
  },
  justify_end: {
    justifyContent: "flex-end",
  },

  items_center: {
    alignItems: "center",
  },

  align_center: {
    alignItems: "center",
  },

  self_center: {
    alignSelf: "center",
  },

  self_end: {
    alignSelf: "flex-end",
  },
  self_start: {
    alignSelf: "flex-start",
  },
  
});

export default styles;
