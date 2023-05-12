import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setTruyen } from '../../redux/actions';

export default function ItemSearch(props) {
  const dispatch = useDispatch();
  const onHandle = () => {
    dispatch(setTruyen(props.item.id))
    props.navigation.navigate("Thông tin truyện")
  }
  return (
    <TouchableOpacity style={{margin: 5, flexDirection: 'row'}} onPress={() => onHandle()}>
      <Image source={{ uri: props.item.avatar }} style={{width:80, height:80, borderRadius: 10, marginRight: 10}}/>
      <View>
        <Text style={{fontSize: 20, fontWeight: '500', width:250}}>{props.item.name}</Text>
        <Text style={{fontSize: 15}}>{props.item.author}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})