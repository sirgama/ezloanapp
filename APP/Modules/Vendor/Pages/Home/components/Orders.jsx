import React, { useState } from 'react';
import { View,Text, TextInput, FlatList, TouchableOpacity, } from 'react-native';
import { colors, flex, space,border,text, shadow } from '../../../../../Styles';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import sampleprodimg from "../../../../../Assets/Images/sampleprodimg.png"
import { Image } from 'react-native';
import BtnRoundedPrimary from '../../../../../Components/Buttons/BtnRoundedPrimary';
import { useNavigation } from '@react-navigation/core';

function Orders(props) {
  const [searchTerm,setSearchTerm] = useState("");
  const navigation = useNavigation()
  const goToOrder =({item})=>{
    navigation.navigate("CustomerOrder")
  }
  const data =[{id:1, productname:"Kangeta", quantity:"2",productimg:sampleprodimg, date:"23 May 2023", order_id:"#0D4886",totalprice:"800.00"},{id:2, productname:"Kangeta", quantity:"2",productimg:sampleprodimg, date:"23 May 2023", order_id:"#0D4886",totalprice:"800.00"},{id:3, productname:"Kangeta", quantity:"2",productimg:sampleprodimg, date:"23 May 2023", order_id:"#0D4886",totalprice:"800.00"}]
    const OrderItem =({item})=>{
        return(
        <TouchableOpacity onPress={()=>{goToOrder(item)}} style={[{borderWidth:1},space.w_full,flex.justify_between,space.mt_10,space.px_10,space.py_10,border.rounded_10,{borderColor:colors.antiflashwhite}]}>
          <View style={[flex.row,flex.justify_between,flex.align_center]}>
            <Text style={[text.size_18,colors.textBlack]}>Product</Text>
            <View style={[flex.row,flex.align_center]}>
            <Text style={[text.size_18,colors.textCoolGrey]}>{item.productname}</Text>
            <Text style={[text.size_18,colors.textCoolGrey,space.ml_5]}>x {item.quantity}</Text>
            <View style={[{},space.ml_20]}>
            <Image source={sampleprodimg} resizeMode='cover' style={[{width:60,height:60}]}/>
            </View>

            </View>
           </View>
           <View style={[flex.row,flex.justify_between,flex.align_center,space.mt_30]}>
            <Text style={[text.size_18,colors.textBlack]}>Date</Text>
            <View style={[flex.row,flex.align_center]}>
            <Text style={[text.size_18,colors.textCoolGrey]}>{item.date}</Text>
            </View>
           </View>
           <View style={[flex.row,flex.justify_between,flex.align_center,space.mt_20]}>
            <Text style={[text.size_18,colors.textBlack]}>ID Order</Text>
            <View style={[flex.row,flex.align_center]}>
            <Text style={[text.size_18,colors.textCoolGrey]}>{item.order_id}</Text>
            </View>
           </View>
           <View style={[flex.row,flex.justify_between,flex.align_center,space.mt_20]}>
            <Text style={[text.size_18,colors.textBlack]}>Total Product</Text>
            <View style={[flex.row,flex.align_center]}>
            <Text style={[text.size_18,colors.textCoolGrey,text.robotoBold]}>Ksh {item.totalprice}</Text>
            </View>
           </View>
           <View style={[space.mt_20,space.px_40]}>
            <BtnRoundedPrimary click={()=>{goToOrder(item)}}>
              <View style={[flex.row,flex.align_center]}>
                <MaterialCommunityIcons name='message-star-outline' size={20} color={"white"} style={[]}/>
                <Text style={[text.robotoMedium,colors.textWhite,text.size_18,space.ml_10]}>Pack & Confirm</Text>

              </View>

            </BtnRoundedPrimary>
          
           </View>
        </TouchableOpacity>)
    }
    return (
       
      <View  style={[colors.bgWhite,space.py_10,space.w_full,flex.align_center]}>
      <View style={[space.w_90,flex.row,flex.justify_between,colors.bgGray6,space.py_5,space.px_10,border.rounded_10,space.margin_10]}>
        <TextInput
        placeholder='Search product'
        keyboardType='default'
        value={searchTerm}
        onChangeText={(txt)=>setSearchTerm(txt)}
        style={[space.px_10,text.size_18]}
        />
        <AntDesign name='search1' size={24} color="grey" style={[space.mr_10]}/>
      </View>
      <View style={[flex.row,flex.justify_between,space.w_full,space.px_10,{height:40,borderColor:colors.gray6,borderWidth:1}]}>
        <TouchableOpacity  style={[flex.row,flex.justify_between,flex.align_center,{width:"50%"},space.px_10]}>
         
          <Text style={[text.robotoMedium,{color:"grey"}]}>SORT BY</Text>
          <AntDesign name='down' size={18} color={"grey"}/>
          

        </TouchableOpacity>
        <TouchableOpacity style={[flex.row,flex.align_center,flex.justify_between,{borderLeftWidth:1,width:"50%",borderLeftColor:colors.gray6},space.px_10]}>
          <Text style={[text.robotoMedium,{color:"grey"}]}>FILTER</Text>
          <MaterialCommunityIcons name='filter-plus-outline' size={20} color={"grey"}/>
        </TouchableOpacity>
      </View>
      <View style={[space.w_90]}> 
      <FlatList
            data={data}
            contentContainerStyle={[{paddingBottom:data.length > 2?300:20}]}
            renderItem={OrderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            
          />

      </View>
      
    </View>
    );
}

export default Orders;