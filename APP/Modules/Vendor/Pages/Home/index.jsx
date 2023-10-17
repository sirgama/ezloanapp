import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import TopBar from '../../Components/TopBar';
import { flex, space } from '../../../../Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageNavigation from './components/PageNavigation';

function Home({route,navigation}) {
    let data = route.params?.data || false;

    const [productActive,setProductActive] = useState(true);
    const [orderActive,setOrderActive] = useState(false);
    useEffect(()=>{
        setOrderActive(data)
        setProductActive(!data)
        
    },[data])

    const handleProductActive =()=>{
        setProductActive(true)
        setOrderActive(false)
        navigation.setParams({ data: undefined });
    }
    const handleOrderActive =()=>{
        setProductActive(false)
        setOrderActive(true)
    }
    return (
       <View style={[flex.flex_1,{backgroundColor:"white",}]} >
        <TopBar/>
        <PageNavigation productActive={productActive} orderActive={orderActive} handleOrderActive={handleOrderActive} handleProductActive={handleProductActive}/>
       </View>
    );
}

export default Home;