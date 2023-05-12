import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChap, setTruyen } from "../../redux/actions";

export default function ItemHistory({ item, navigation }) {
  const theme = useSelector((state) => {
    return state.reTheme;
  });
  const history = useSelector((state) => {
    return state.historyItem;
  });
  const data = history.find((it) => it.idHistoryTruyen === item.id)
  const dispatch = useDispatch()
  const onHandle = () =>{
    dispatch(setTruyen(item.id))
    dispatch(setChap(data.idHistoryChap))
    navigation.navigate("Content")
  }
  return (
    <TouchableOpacity style={{margin: 10,flexDirection: "row" }} onPress={() => onHandle()}>
      <Image source={{ uri: item.avatar }} style={{ width: 120, height: 100, borderRadius: 10 }} />
      <View>
        <Text style={{fontSize:20, fontWeight: "400",width: 220, margin: 5, color: theme.theme === "white" ? "black" : "white"}}>{item.name}</Text>
        <Text style={{margin:5, color: theme.theme === "white" ? "black" : "white"}}>Đang đọc chap: {data.idHistoryChap}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
