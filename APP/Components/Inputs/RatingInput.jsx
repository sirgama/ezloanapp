import React, { useState, useEffect } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { flex, space, colors, border, text } from "./../../Styles";

import { Entypo } from "@expo/vector-icons";

const RatingInput = ({
  n = [true, false, false, false, false],
  setN = () => {},
  mt = 0,
  mb = 0,
  s = 40,
  showLabel = true,
  label = "Rating *",
  setPercentage = () => {},
  setRatingIndex = () => {},
}) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(n);
  }, []);

  function handleChange(index) {
    let k = [];
    for (let i = 0; i < n.length; i++) {
      if (index >= i) {
        k.push(true);
        continue;
      }
      k.push(false);
    }
    setRatingIndex(index + 1);
    setStars(k);
    setN(k);
    setPercentage(((index + 1) * 100) / n.length);
  }

  return (
    <View style={[{ marginTop: mt, marginBottom: mb }]}>
      {showLabel && (
        <Text
          style={[
            text.robotoMedium,
            text.size_16,
            colors.textPrimary,
            space.mb_5,
          ]}
        >
          {label}
        </Text>
      )}
      <View style={[flex.row, flex.justify_between]}>
        {stars.map((star, index) => (
          <TouchableOpacity key={index} onPress={() => handleChange(index)}>
            <Entypo
              name={star ? "star" : "star-outlined"}
              size={s}
              color="#ffd700"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RatingInput;
