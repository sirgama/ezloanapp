import React from 'react';
import { Image, Text, View } from 'react-native';
import { border, colors, flex, space, text } from '../../../../../Styles';
import sampleprodimg from "../../../../../Assets/Images/sampleprodimg.png"
import BtnBlockPrimary from '../../../../../Components/Buttons/BtnBlockPrimary';
import useApp from '../../../../../Hooks/useapp.hook';
import { useNavigation } from '@react-navigation/core';

import confirmpopupimg from "../../../../../Assets/Images/confirmpopupimage.png"

function BodySection(props) {
    const {setCustomPopUp} = useApp()
    const navigation = useNavigation()
    const pop = {
        primaryText: "Confirmed",
        secondaryText: "Thanks for confirming. A rider is on the way to pickup the item for delivery",
        btnText: "Done",
        color: "americanOrange",
        visible: false,
        image:confirmpopupimg
      };
    const order ={productname:"Kangeta", productquantity:"2 Kg", productunitprice:"400.00",
     items:2,order_time:" 27th Jan 2023, 3:30 PM",order_number:"HF3249B3#", totalprice:"800.00",
      payment_method:"Mpesa", payment_status:"Paid",customer_name:"John Customer",customer_phone_number:"0712345678",town:"Thika",address:"1232, Chania"}
    
      const handleConfirm =()=>{
        setCustomPopUp({ ...pop, singleCustomVisible: true});
      }
    
      return (
        <View style={[space.mt_10,space.px_20,space.w_full,]}>
            <View style={[flex.row,flex.align_center,flex.justify_between]}>
                <View style={[flex.row,flex.align_center]}>
                <View style={[{height:60,width:60,borderRadius:30,overflow:"hidden"}]}>
                <Image resizeMode='contain' source={sampleprodimg}/>
            </View>
            <View style={[space.ml_10]}>
                <Text style={[text.size_18,text.robotoBold,colors.textBlack]}>{order.productname}</Text>
                <View style={[flex.row,space.mt_5]}>
                    <Text style={[text.size_15,text.robotoBold,colors.textRed]}>{order.productquantity},</Text>
                    <Text style={[text.size_15,text.robotoBold,colors.textRed,space.ml_5]}>{order.productunitprice}</Text>

                </View>
            </View>
                </View>
           
            <Text style={[,text.size_25,text.robotoBold,colors.textBlack,space.mr_25]}>{order.items}</Text>
            </View>

            <View style={[border.rounded_10,colors.bgLightGray,space.mt_20]}>
                <View style={[space.py_5,{height:40,alignItems:"center"}]}>
                    <Text style={[flex.self_center,text.size_25,colors.textTaupeGray,text.robotoMedium]}>Order Details</Text>
                </View>
                <View style={[space.p_10,colors.bgWhite,{borderBottomEndRadius:10,borderBottomStartRadius:10}]}>
                <View style={[flex.row,flex.justify_between]}>
                    <Text style={[text.size_16,colors.textCoolGrey]}>Order Time</Text>
                    <Text style={[text.size_16,colors.textCoolGrey,text.robotoMedium]}>{order.order_time}</Text>
                </View>
                <View style={[flex.row,flex.justify_between,space.mt_10]}>
                    <Text style={[text.size_16,colors.textCoolGrey]}>Order Number</Text>
                    <Text style={[text.size_16,colors.textCoolGrey,text.robotoMedium]}>{order.order_number}</Text>
                </View>
                <View style={[flex.row,flex.justify_between,space.mt_10]}>
                    <Text style={[text.size_16,colors.textCoolGrey]}>Items {"("}{order.items}{")"}</Text>
                    <Text style={[text.size_16,colors.textCoolGrey,text.robotoMedium]}>Ksh {order.totalprice}</Text>
                </View>
                <View style={[flex.row,flex.justify_between,space.mt_10]}>
                    <View style={[flex.row]}>
                    <Text style={[text.size_16,colors.textCoolGrey]}>Payment {"-"} </Text>
                    <Text style={[text.size_16,colors.textPrimary,text.robotoBold]}>{order.payment_method}</Text>
                    </View>
                    
                    <Text style={[text.size_16,colors.textCoolGrey,text.robotoMedium]}>{order.payment_status}</Text>
                </View>
                </View>
               
            </View>


            <View style={[border.rounded_10,colors.bgLightGray,space.mt_20]}>
                <View style={[space.py_5,{height:40,alignItems:"center"}]}>
                    <Text style={[flex.self_center,text.size_25,colors.textTaupeGray,text.robotoMedium]}>Billing Details</Text>
                </View>
                <View style={[space.p_10,colors.bgWhite,{borderBottomEndRadius:10,borderBottomStartRadius:10}]}>
                <View style={[flex.row,flex.justify_between]}>
                    <Text style={[text.size_16,colors.textCoolGrey]}>Customer Name</Text>
                    <Text style={[text.size_16,colors.textCoolGrey,text.robotoMedium]}>{order.customer_name}</Text>
                </View>
                <View style={[flex.row,flex.justify_between,space.mt_10]}>
                    <Text style={[text.size_16,colors.textCoolGrey]}>Phone Number</Text>
                    <Text style={[text.size_16,colors.textCoolGrey,text.robotoMedium]}>{order.customer_phone_number}</Text>
                </View>
                <View style={[flex.row,flex.justify_between,space.mt_10]}>
                    <Text style={[text.size_16,colors.textCoolGrey]}>Town</Text>
                    <Text style={[text.size_16,colors.textCoolGrey,text.robotoMedium]}>{order.town}</Text>
                </View>
                <View style={[flex.row,flex.justify_between,space.mt_10]}>
                    <Text style={[text.size_16,colors.textCoolGrey]}>Address</Text>
                    <Text style={[text.size_16,colors.textCoolGrey,text.robotoMedium]}>{order.address}</Text>
                </View>
               
                </View>
               
            </View>

            <View style={[space.w_full,space.px_40,space.mt_20]}>
                <BtnBlockPrimary click={handleConfirm}>
                    <Text style={[text.robotoBold,colors.textWhite,text.size_18]}>Confirm</Text>
                </BtnBlockPrimary>
            </View>
           


        </View>
    );
}

export default BodySection;