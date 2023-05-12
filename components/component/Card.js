import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTruyen } from "../../redux/actions";
export default function Card(props) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    return state.reTheme;
  });
  const onHandle = () => {
    dispatch(setTruyen(props.id));
    props.navigation.navigate("Thông tin truyện");
  };
  return (
    <TouchableOpacity
      style={{ margin: 5, width: 170 }}
      onPress={() => onHandle()}
    >
      <Image
        source={{ uri: props.avatar }}
        style={{ width: "96%", height: 200, borderRadius: 10 }}
      />
      <Text style={{ fontSize: 13, fontWeight: "500", width: 140, color: theme.theme === "white" ? "black" : "white" }}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
