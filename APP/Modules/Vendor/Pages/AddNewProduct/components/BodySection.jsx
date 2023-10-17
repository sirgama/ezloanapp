import React, { useState } from 'react';
import File from '../../../../../Components/Inputs/File';
import { Image,TouchableOpacity,View,Text, ScrollView } from 'react-native';
import BtnBlockPrimary from '../../../../../Components/Buttons/BtnBlockPrimary';
import { border, colors, flex, space, text } from '../../../../../Styles';
import TextCustomInput from '../../../../../Components/Inputs/TextCustomInput';
import DropSelect from '../../../../../Components/Inputs/DropSelect';
import TextArea from '../../../../../Components/Inputs/TextArea';
import BtnBlockPrimaryOutline from '../../../../../Components/Buttons/BtnBlockPrimaryOutline';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
function BodySection(props) {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState({});
    const [productname,setProductName] = useState("");
    const [unit,setUnit] = useState("")
    const [category,setCategory] = useState("")
    const [cost,setCost] = useState("")
    const [description,setDescription] = useState("")

  const [validate, setValidate] = useState(-1);
    const categories =[]
    const units= []




return (
    <View style={[flex.flex_1]}>
        <ScrollView showsVerticalScrollIndicator={false} >  
      
      <File
      label=''
      input={images}
      setInput={setImages}
      />

        <View style={[space.margin_10]}>
            <TextCustomInput
                 input={productname}
                 setInput={setProductName}
                 placeholder="Product Name"
                 label="Product Name"
                 mt={10}
                 custom={true}
                 children={ <Ionicons name="person-outline" size={24} style={[colors.textTaupeGray]} />}
            />
            <DropSelect
                label='Category'
                input={category}
                setInput={setCategory}
                items={categories}
                validate={validate}
            />
            <View style={[flex.row,flex.justify_between,space.w_full,flex.align_center]}>
                <View style={[{width:"45%"}]}>
                <TextCustomInput
                 input={cost}
                 setInput={setCost}
                 placeholder="Cost"
                 label="Cost"
                 mt={10}
                 custom={true}
                 children={ <FontAwesome5 name="money-bill-alt" size={24} style={[colors.textTaupeGray]} />}
            />
                </View>
                <View style={[{width:"45%"}]}>
                <DropSelect
                 label='Unit'
                 input={unit}
                 setInput={setUnit}
                 items={units}
                 validate={validate}
                />
                </View>
            </View>
            <TextArea
              input={description}
              setInput={setDescription}
              label="Description"
              placeholder="Enter some short description about this product"
              mt={10}
              custom={true}
              children={null}/>
        </View>

       <View style={[space.px_20,space.mt_10]}>
       <BtnBlockPrimary>
            <Text style={[text.robotoBold,colors.textWhite,text.size_18]}>Create Product</Text>
        </BtnBlockPrimary>
        <BtnBlockPrimaryOutline mt={20} mb={20}>
            <Text style={[text.robotoBold,colors.textPrimary,text.size_18]}>Create & add new</Text>
        </BtnBlockPrimaryOutline>
       </View>
        

       </ScrollView>
    </View>
    );
}



export default BodySection;