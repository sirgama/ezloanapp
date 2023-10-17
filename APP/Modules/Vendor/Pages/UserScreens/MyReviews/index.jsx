import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, } from 'react-native';
import { border, colors, flex, shadow, space, text } from '../../../../../Styles';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import TopNavigation from './components/TopNavigation';
import BtnBlockPrimaryOutline from '../../../../../Components/Buttons/BtnBlockPrimaryOutline';
import sampleavatar1 from "../../../../../Assets/Images/sampleavatar1.png";
import sampleavatar2 from "../../../../../Assets/Images/sampleavatar2.png";


function MyReviews(props) {

    const reviews = [{id:1, user_name:"Ngesh Kazoze", rating:4.5, date:"20 Jul 2023, 10:30 AM ", review:"Definitely one of the best vendors in the platform. I got my veve and tools in the shortest time possible. Big up!!!", avatar:sampleavatar1},
    {id:2, user_name:"Alecky Kaggz", rating:4, date:"21 Jul 2023, 10:30 AM ", review:"Definitely one of the best vendors in the platform. I got my veve and tools in the shortest time possible. Big up!!!", avatar:sampleavatar2}
,]
    const RatingComponent = ({ rating }) => {
        const renderStars = () => {
          const stars = [];
          for (let i = 0; i < 5; i++) {
            stars.push(
              <Ionicons
                key={i}
                name={i < rating ? 'star' : 'star-outline'}
                size={15}
                color={colors.secondary}
              />
            );
          }
          return stars;
        };
      
        return <View style={[flex.row]}>{renderStars()}</View>;
      };

    const ReviewItem = ({item})=>{
        return(
            <View style={[space.p_10]}>
                <View style={[flex.row]}>
                    <Image source={item.avatar} />
                    <View style={[space.ml_20]}>
                        <Text style={[text.robotoMedium,text.size_20]}>{item.user_name}</Text>
                        <RatingComponent rating={item.rating}/>
                        <Text style={[text.robotoRegular,text.size_15,colors.textTaupeGray]}>{item.date}</Text>
                    </View>

                </View>
                <Text style={[space.mt_15,text.robotoRegular,text.size_18]}>{item.review}</Text>
            </View>
        )
    }



    return (
       <View style={[flex.flex_1]}>
        <TopNavigation/>
        <View style={[flex.row,flex.align_center,space.py_10,colors.bgWhite,border.rounded_10,space.margin_20]}>
            <View style={[space.ml_20,flex.align_center]} >
                <Text style={[text.size_30,text.robotoBold,colors.textPrimary]}>4.6</Text>
                <Text style={[text.size_16,text.robotoRegular,colors.textTaupeGray]}>Out of 5.0</Text>
            </View>
            <View style={[space.ml_20,{}]} >
                <View style={[flex.row,flex.align_center]}>
                    <View style={[{width:"23%"}]}>
                    <Text style={[text.size_16,text.robotoRegular]}>Excellent</Text>
                    </View>
                    <View style={[{width:"70%"}]}>
                    <View style={[colors.bgPrimary,border.rounded_10,{height:6,width:100},space.ml_20]} ></View>
                    </View>
                </View>
                <View style={[flex.row,flex.align_center,{marginTop:2}]}>
                    <View style={[{width:"23%"}]}>
                    <Text style={[text.size_16,text.robotoRegular]}>Very Good</Text>
                    </View>
                    <View style={[{width:"70%"}]}>
                    <View style={[{backgroundColor:"#F2AE2E"},border.rounded_10,{height:6,width:80},space.ml_20]} ></View>
                    </View>
                </View>
                <View style={[flex.row,flex.align_center,{marginTop:2}]}>
                    <View style={[{width:"23%"}]}>
                    <Text style={[text.size_16,text.robotoRegular]}>Average</Text>
                    </View>
                    <View style={[{width:"70%"}]}>
                    <View style={[{backgroundColor:"#F2AE2E"},border.rounded_10,{height:6,width:50},space.ml_20]} ></View>
                    </View>
                </View>
                <View style={[flex.row,flex.align_center,{marginTop:2}]}>
                    <View style={[{width:"23%"}]}>
                    <Text style={[text.size_16,text.robotoRegular]}>Poor</Text>
                    </View>
                    <View style={[{width:"70%"}]}>
                    <View style={[{backgroundColor:"#BF213E"},border.rounded_10,{height:6,width:30},space.ml_20]} ></View>
                    </View>
                </View>
                <View style={[flex.row,flex.align_center,{marginTop:2}]}>
                    <View style={[{width:"23%"}]}>
                    <Text style={[text.size_16,text.robotoRegular]}>Terrible</Text>
                    </View>
                    <View style={[{width:"70%"}]}>
                    <View style={[{backgroundColor:"#BF213E"},border.rounded_10,{height:6,width:15},space.ml_20]} ></View>
                    </View>
                </View> 
            </View>
        </View>
        <FlatList
            data={reviews}
            contentContainerStyle={[space.px_10,{paddingBottom:reviews.length > 3?80:20}]}
            renderItem={ReviewItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            
          />

        <View style={[space.px_40,space.mb_20]}>
        <BtnBlockPrimaryOutline>
            <Text  style={[text.size_18,text.robotoBold,colors.textPrimary]}>See More Reviews</Text>
        </BtnBlockPrimaryOutline>
        </View>

       </View>
    );
}

export default MyReviews;