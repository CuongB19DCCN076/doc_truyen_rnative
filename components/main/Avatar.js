import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import anh from "../../images/avatar.jpg";
import anh1 from "../../images/ava1.jpg";
import anh2 from "../../images/ava2.jpg";
import anh3 from "../../images/ava3.jpg";
import anh4 from "../../images/ava4.jpg";
import anh5 from "../../images/ava.jpg";
export default function Avatar() {
    const dataImages = [anh,anh1,anh2,anh3,anh4,anh5]
  return (
    <View style={{margin: "10%", alignItems: "center"}}>
        <Text style={{fontSize: 30, fontWeight: "400", color: "#FB8985", textAlign: 'center', marginBottom: 20}}>Chọn 1 ảnh bên dưới</Text>
    <ScrollView horizontal style={{width: "100%", }}>
        {dataImages.map(image => {
            return <View style={{marginRight: 5}}> 
                <Image source={image} style={{width: 300, height: 300}}/>
                <TouchableOpacity style={{backgroundColor: "#1237A1", opacity: 0.8, padding:5}}>
                    <Text style={{fontSize: 25, fontWeight: "400", color: "white", textAlign: 'center'}}>Áp dụng</Text>
                </TouchableOpacity>
            </View>
        })}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})