import paddingX from "./paddingX";
import paddingY from "./paddingY";

const padding = {
  p_0: {
    padding: 0,
  },

  p_5: { padding: 5 },

  p_10: { padding: 10 },

  p_15: { padding: 15 },
  p_20: { padding: 20 },

  ...paddingX,
  ...paddingY,
};

export default padding;
