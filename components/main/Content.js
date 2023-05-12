import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { intiState } from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { addHistory, setChap } from "../../redux/actions";
export default function Content() {
  const data = useSelector((state) => {
    return state.test;
  });
  const theme = useSelector((state) => {
    return state.reTheme;
  });
  const dispatch = useDispatch();
  const itemTruyen = intiState.home.find(
    (element) => element.id === data.idTruyen
  );
  const itemChap = itemTruyen.chapter.find(
    (element) => element.id === data.idChap
  );
  const handlePrev = () => {
    dispatch(addHistory({idHistoryTruyen: itemTruyen.id, idHistoryChap: data.idChap-1}))
    dispatch(setChap(data.idChap-1))
  }
  const handleNext = () => {
    dispatch(addHistory({idHistoryTruyen: itemTruyen.id, idHistoryChap: data.idChap+1}))
    dispatch(setChap(data.idChap+1))
  }
  return (
    <View style={{backgroundColor: theme.theme === "white" ? "#ddd" : "black"}}>
      <View style={{justifyContent: "center", alignItems: "center", height: 100, backgroundColor: "pink", position: "absolute", width: "100%", zIndex: 999}}>
        <Text style={{fontSize:22, top: 12, color: "white"}}>{itemTruyen.name}</Text>
        <Text style={{fontSize:16, top: 14, color: "white"}}>Chapter: {data.idChap}</Text>
      </View>
      <ScrollView style={{
        top: 110,
      }}>
        {itemChap.content.map((item, index) => {
          return (
            <View style={{ width: "96%", height: 700, borderRadius: 10, left: "2%", marginVertical: 2 }} key={index}>
            <Image 
              source={{ uri: item }}
              style={{ width: "100%", height: 700, borderRadius: 10, marginVertical: 2 }}
              />
              </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            width: 180,
            height: 44,
            backgroundColor: "#ccc",
            marginRight: 6,
            borderRadius: 10,
            opacity: data.idChap === 1 ? 0.4 : 1
          }} disabled={data.idChap === 1 ? true : false} onPress={() => handlePrev()}
        >
          <Image
            style={{ width: 30, height: 30, marginRight:10 }}
            source={require("../../images/prev.png")}
          />
          <Text style={{fontSize: 20, fontWeight: "300"}}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            width: 180,
            height:44,
            backgroundColor: "#ccc",
            borderRadius: 10,
            opacity: data.idChap === itemTruyen.chapter.length ? 0.4 : 1
          }} disabled={data.idChap === itemTruyen.chapter.length ? true : false} onPress={() => handleNext()}
        >
          <Text style={{fontSize: 20, fontWeight: "300"}}>Next</Text>
          <Image
            style={{ width: 30, height: 30,marginLeft:10 }}
            source={require("../../images/next.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
