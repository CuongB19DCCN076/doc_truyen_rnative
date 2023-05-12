import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Help() {
  const theme = useSelector((state) => {
    return state.reTheme;
  });
  return (
    <View
      style={{
        margin: 0,
        flex: 1,
        backgroundColor: theme === "white" ? "white" : "black",
      }}
    >
      <View style={{margin: 30}}>
        <Text
          style={{ fontSize: 30, color: theme === "white" ? "black" : "white" }}
        >
          Mọi thắc mắc vui lòng liên hệ tới email:{" "}
        </Text>
        <Text
          style={{ fontSize: 20, color: theme === "white" ? "black" : "white" }}
        >
          nvcuong1904@gmail.com{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
