import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import { colors, flex, space, text } from '../../../../Styles';
import welcomevendor1 from "../.././../../Assets/Images/welcomevendor1.png"
import onboardvendor1 from "../.././../../Assets/Images/onboardvendor1.png"
import welcomevendor2 from "../.././../../Assets/Images/welcomevendor2.png"
import onboardvendor2 from "../.././../../Assets/Images/onboardvendor2.png"
import BtnBlockPrimary from '../../../../Components/Buttons/BtnBlockPrimary';
import subtract from "../../../../Assets/Images/subtract.png"
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen(props) {
    const [verified,setVerified] = useState(false)
    const navigation = useNavigation();
    return (
        <View style={[flex.flex_1, { backgroundColor: "white" }]}>
            
            {verified?(
                <View>
                     <View style={[{maxHeight:250,},space.w_full,]}>
                      <Image source={welcomevendor2} resizeMode="cover" style={[space.w_full]}/>
                      </View>
                      <View style={[{position:"absolute", top:60,},flex.align_center,space.w_full]}>
                      <Text style={[colors.textWhite, text.size_25,text.robotoBold,flex.self_center,{textAlign:"center"}]}>Welcome to our vendor {"\n"} network, where success awaits</Text>
                      </View>
                      <View style={[flex.align_center,{backgroundColor:"white", marginTop:20,}]}>
                      <Image source={subtract} style={[{marginTop:-42,resizeMode:"stretch",position:"absolute"},space.w_full]}/>
                        <Image source ={onboardvendor2} resizeMode='contain' style={[space.mt_30]}/> 
                        <Text style={[space.mt_30, text.robotoMedium, colors.textCoolGrey,text.size_18,{textAlign:"center"}]}>Your account has been successfully {"\n"} verified! you can now start selling {"\n"} with us.</Text>
                       <View style={[space.px_40,space.w_full,space.mt_30]}>
                       <BtnBlockPrimary click={()=>{navigation.navigate("Home")}} >
                        <Text style={[text.robotoMedium, text.size_16, colors.textWhite]}>Explore Dashboard</Text>
                       </BtnBlockPrimary>
                       </View>
                      </View>
                </View>
            ):(
                <View>
                <View style={[{maxHeight:250},space.w_full,]}>
                 <Image source={welcomevendor1} resizeMode="cover" style={[space.w_full]}/>
                 </View>
                 <View style={[{position:"absolute", top:60,},flex.align_center,space.w_full]}>
                 <Text style={[colors.textWhite, text.size_25,text.robotoBold,flex.self_center,{textAlign:"center"}]}>Welcome to our vendor {"\n"} network, where success awaits</Text>
                 </View>
                 <View style={[flex.align_center,{marginTop:50,}]}>
                 <Image source={subtract} style={[{marginTop:-72,resizeMode:"stretch",position:"absolute"},space.w_full]}/>
                   <Image source ={onboardvendor1} resizeMode='contain' style={[space.mt_30]}/> 
                   <Text style={[space.mt_40, text.robotoMedium, colors.textCoolGrey,text.size_18,{textAlign:"center"}]}>Your account is now being verified for {"\n"} approval. We'll notify you once the {"\n"} verification process is complete. {"\n"} Stay tuned.</Text>
                  <View style={[space.px_40,space.w_full,space.mt_40]}>
                  <BtnBlockPrimary click={()=>{setVerified(true)}} >
                   <Text style={[text.robotoMedium, text.size_16, colors.textWhite]}>Refresh</Text>
                  </BtnBlockPrimary>
                  </View>
                 </View>
           </View>
            )}
        </View> 
    );
}

export default WelcomeScreen;