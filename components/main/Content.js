import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { intiState } from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { setChap } from "../../redux/actions";
export default function Content() {
  const data = useSelector((state) => {
    return state.test;
  });
  const dispatch = useDispatch();
  const itemTruyen = intiState.home.find(
    (element) => element.id === data.idTruyen
  );
  const itemChap = itemTruyen.chapter.find(
    (element) => element.id === data.idChap
  );
  const handlePrev = () => {
    dispatch(setChap(data.idChap-1))
  }
  const handleNext = () => {
    dispatch(setChap(data.idChap+1))
  }
  return (
    <View>
      <ScrollView style={{
      }}>
        {itemChap.content.map((item, index) => {
          return (
            <Image key={index}
              source={{ uri: item }}
              style={{ width: "96%", height: 200, borderRadius: 10 }}
            />
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
