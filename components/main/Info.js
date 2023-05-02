import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { intiState } from "./Home";
import { setChap } from "../../redux/actions";
export default function Info(props) {
  const data = useSelector((state) => {
    return state.test;
  });
  // const dispatch = useDispatch();
  const item = intiState.home.find((element) => element.id === data.idTruyen);
  const dispatch = useDispatch();
  const navi = props.navigation;
  const onHandleChap = (id) => {
    dispatch(setChap(id));
    navi.navigate("Content")
  };
  return (
    <ScrollView>
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 30,
          fontWeight: "500",
        }}
      >
        {item.name}
      </Text>
      <View style={{ marginTop: 20, flexDirection: "row" }}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 150, height: 200, marginHorizontal: 10 }}
        />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../images/author.png")}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontSize: 20, marginLeft: 10 }}>{item.author}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Image
              source={require("../../images/trang_thai.png")}
              style={{ width: 25, height: 25 }}
            />
            <Text style={{ fontSize: 16, marginLeft: 10 }}>{item.state}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              flexWrap: "wrap",
              width: 200,
            }}
          >
            {item.category.map((it, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderRadius: 3,
                    padding: 5,
                    margin: 5,
                  }}
                >
                  {it}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text
          style={{
            color: "blue",
            fontSize: 20,
            paddingBottom: 6,
            borderBottomWidth: 1,
            width: 100,
            borderColor: "blue",
          }}
        >
          Giới thiệu
        </Text>
        <View>
          <Text>{item.introduce}</Text>
        </View>
      </View>
      <View style={{ marginTop: 10, marginHorizontal: 10 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "600",
            textAlign: "center",
            borderBottomWidth: 3,
            borderColor: "orange",
            color: "blue",
          }}
        >
          Danh sách chương
        </Text>
        <ScrollView style={{ flexDirection: "column-reverse" }}>
          {item.chapter
            .map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => onHandleChap(item.id)}>
                  <Text
                    style={{
                      padding: 10,
                      borderBottomWidth: 1,
                      borderColor: "#ccc",
                      textAlign: "center",
                    }}
                  >
                    Chapter {item.id}
                  </Text>
                </TouchableOpacity>
              );
            })
            .reverse()}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
