import React, { useContext, useState } from "react";
import { View, Image, ScrollView, Dimensions, Animated } from "react-native";
import { space } from "../../../../../../Styles";
import signupimg1 from "../../../../../../Assets/Images/signupimg1.png"
import signupimg2 from "../../../../../../Assets/Images/signupimg2.png"
import color from "../../../../../../Styles/colors/color";


function ImageSlider() {
  const { width } = Dimensions.get("window");
  const [scrollX, setScrollX] = useState(new Animated.Value(0));
  let position = Animated.divide(scrollX, width);

  const images =[{id:1, image_url:signupimg1},{id:2, image_url:signupimg2}]

  return (
    <View style={[{maxHeight:300,}, space.w_full,]}>
    <View
      style={[{ justifyContent: "center", alignItems: "center",}]}
    >
      <View style={{ width, height: width,borderBottomEndRadius:200,borderBottomStartRadius:200}}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ],{ useNativeDriver: false })}
          scrollEventThrottle={16}
        >
            
            {images.length != 0?
        images.map((image, i) => {
            return (
              <Image
                key={i}
                style={{ width, height: width, }}
                source={image.image_url }
                resizeMode="cover"
              />
            );
          }):
        
            <Image
              style={{ width, height: width }}
              source={signupimg1}
              resizeMode="cover"
              
            />
          
          }
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row",position:"absolute", bottom:10}}>
      {images
          ? images.map((_, i) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp",
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,
                    height: 8,
                    width: 8,
                    backgroundColor: color.primary,
                    margin: 5,
                    borderRadius: 4,
                  }}
                />
              );
            })
          : null}
      </View>
    </View>
    </View>
  );
}
export default ImageSlider;
