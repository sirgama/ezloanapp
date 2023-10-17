import React, { useState } from 'react';
import { View ,Text, TouchableOpacity, TextInput, FlatList, Image} from 'react-native';
import { border, colors, flex, shadow, space, text } from '../../../../../Styles';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import sampleprodimg from "../../../../../Assets/Images/sampleprodimg.png"
import AbsoluteBtn from '../../../../../Components/Buttons/AbsoluteBtn';
import { useNavigation } from '@react-navigation/core';

function Products(props) {
  const [searchTerm,setSearchTerm] = useState("")
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigation()

  const RatingComponent = ({ rating }) => {
    const renderStars = () => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push(
          <Ionicons
            key={i}
            name={i < rating ? 'star' : 'star-outline'}
            size={15}
            color="#FFD700"
          />
        );
      }
      return stars;
    };
  
    return <View style={[flex.row]}>{renderStars()}</View>;
  };
  const handleItemClick = (item) => {
    if (selectedItem && selectedItem.id === item.id) {
      setSelectedItem(null); // Hide the selected item if clicked again
    } else {
      setSelectedItem(item);
    }
  };
  const goToAddProduct =() =>{
    navigation.navigate("AddNewProduct")
  }
    
  

  
  const data = [
  {id:1,name:"Kangeta", status:"Published", rating:5, reviews:"10",price:"100.00",image:sampleprodimg},
  {id:2,name:"Kangeta", status:"Draft", rating:3, reviews:"10",price:"100.00",image:sampleprodimg},
  {id:3,name:"Kangeta", status:"Pending Review", rating:3, reviews:"10",price:"100.00",image:sampleprodimg},
]
  const ProductItem = ({item})=>{
    const isSelected = selectedItem && selectedItem.id === item.id;
      return(
        <TouchableOpacity onPress={()=>handleItemClick(item)}>
        <View style={[space.w_full,flex.row,flex.align_center,space.px_20,space.py_10,border.rounded_10,space.mt_10, {backgroundColor:"white"}]}>
          <View>
            <Image source={item.image} resizeMode='cover'/>
          </View>
          <View style={[space.ml_20]}>
          <Text style={[colors.textBlack,text.size_18,text.robotoMedium]}>{item.name}</Text>
          
          <View style={[flex.row,]}>
          <Text style={[colors.textGrey,text.size_16,text.robotoRegular]}>Status:</Text>
          <Text style={[item.status == "Pending Review" && colors.textSecondary,item.status == "Draft" && colors.textGrey,item.status == "Published" && colors.textPrimary,text.size_16,text.robotoRegular,space.ml_5]}>{item.status}</Text>
          </View>
          
          <View style={[flex.row]}>
          <RatingComponent rating={item.rating}/>
          <Text style={[colors.textGrey,text.size_16,text.robotoRegular,space.ml_5]}>{'('}{item.reviews} reviews{')'}</Text>
          </View>
          <View style={[flex.row,]}>
          <Text style={[colors.textBlack,text.size_18,text.robotoMedium]}>Ksh {item.price}</Text>
          <Text style={[colors.textGrey,text.size_16,text.robotoRegular,space.ml_5]}>{'/'}per KG</Text>
          </View>
          </View>
        </View>
        {isSelected&&(
           <View style={[,space.py_10,border.rounded_10,flex.row,flex.justify_between,space.px_20,{marginTop:-10,borderBottomWidth:1,borderBottomColor:"lightgrey"}]}>
           <TouchableOpacity>
           <View style={[flex.row,space.mt_10]}>
            <AntDesign name='eye' size={17} color={"#00ADED"}/>
            <Text style={[colors.textGrey,text.size_13,space.ml_5]}>Preview</Text>
            
           </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View style={[flex.row,space.mt_10]}>
           <FontAwesome5 name='edit' size={14} color={colors.primary}/>
            <Text style={[colors.textGrey,text.size_13,space.ml_5]}>Edit</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View style={[flex.row,space.mt_10]}>
           <MaterialCommunityIcons name='delete' size={17} color={colors.secondary}/>
            <Text style={[colors.textGrey,text.size_13,space.ml_5]}>Delete</Text>
           </View>
           </TouchableOpacity>
         </View>
        )}
       
        </TouchableOpacity>
        )
    }
    return (
      <View style={[space.mt_10,space.h_full,colors.bgGray6]}>
        <View style={[colors.bgGray6,space.py_20,space.px_10,space.w_full,flex.row,flex.justify_between,flex.align_center]}>
        <Text style={[text.robotoBold,text.size_18]}>Your Products 🔥</Text>
        <TouchableOpacity style={[{height:25,borderRadius:5},colors.bgPrimary,space.px_20,flex.justify_center]} onPress={goToAddProduct}>  
          <Text style={[colors.textWhite,text.robotoMedium]}>Add Product</Text>
        </TouchableOpacity>
      
        </View>

        <View  style={[colors.bgWhite,space.py_10,space.px_10,space.w_full,flex.row,flex.justify_between,flex.align_center]}>
          <View style={[space.w_10p]}>
            <MaterialCommunityIcons name='filter-plus-outline' size={30} color={"grey"}/>
          </View>
          <View style={[space.w_90,flex.row,flex.justify_between,colors.bgGray6,space.py_5,border.rounded_10]}>
            <TextInput
            placeholder='Search product'
            keyboardType='default'
            value={searchTerm}
            onChangeText={(txt)=>setSearchTerm(txt)}
            style={[space.px_10,text.size_18]}
            />
            <AntDesign name='search1' size={24} color="grey" style={[space.mr_10]}/>
          </View>
        </View>

        <FlatList
            data={data}
            contentContainerStyle={[space.px_10,{paddingBottom:data.length > 5?80:20}]}
            renderItem={ProductItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            
          />
      
        
      <AbsoluteBtn click={goToAddProduct}/>

      </View>
    );
}

export default Products;