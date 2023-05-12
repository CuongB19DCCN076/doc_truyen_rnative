import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/actions";
import { auth } from "../../firebase";

export default function Profile({ navigation }) {
  const theme = useSelector((state) => {
    return state.reTheme;
  });
  const dispatch = useDispatch();
  const onHanleThemeWhite = () => {
    dispatch(setTheme("white"))
  }
  const onHanleThemeBlack = () => {
    dispatch(setTheme("black"))
  }
  console.log(auth.currentUser.email)
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.theme === "white" ? "#ddd" : "black",
        flex: 1,
      }}
    >
      <Image
        source={require("../../images/avatar.jpg")}
        style={{ width: 150, height: 150, borderRadius: 100, top: -30 }}
      />
      <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>Xin chào,</Text>
      <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>{auth.currentUser.email}</Text>
      <View style={{ top: 10 }}>
        <View
          style={{
            width: 250,
            justifyContent: "space-between",
            borderRadius: 10,
            alignItems: "center",
            flexDirection: "row",
            height: 50,
            backgroundColor: "white",
            margin: 5,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 17, color: "green" }}>Chọn giao diện</Text>
          <TouchableOpacity
            style={{
              width: 40,
              height: 24,
              backgroundColor:theme.theme === "white" ? "green" : "#ccc",
              justifyContent: "center",
              alignContent: "center",
              borderRadius: 5,
              marginRight: -20,
            }}
            onPress={() => onHanleThemeWhite()}
          >
            <Text style={{ textAlign: "center", color : theme.theme === "white" ? "white" : "black", }}>Sáng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 24,
              backgroundColor:theme.theme === "black" ? "green" : "#ccc",
              justifyContent: "center",
              alignContent: "center",
              borderRadius: 5,
            }}
            onPress={() => onHanleThemeBlack()}
          >
            <Text style={{ textAlign: "center", color : theme.theme === "black" ? "white" : "black", }}>Tối</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 250,
            justifyContent: "space-between",
            borderRadius: 10,
            alignItems: "center",
            flexDirection: "row",
            height: 50,
            backgroundColor: "white",
            margin: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate("Hỗ Trợ")}
        >
          <Text style={{ fontSize: 17, color: "green" }}>Trợ giúp</Text>
          <Image
            source={require("../../images/ne.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 250,
            justifyContent: "space-between",
            borderRadius: 10,
            alignItems: "center",
            flexDirection: "row",
            height: 50,
            backgroundColor: "white",
            margin: 5,
            padding: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ fontSize: 17, color: "green" }}>Đăng xuất</Text>
          <Image
            source={require("../../images/ne.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
