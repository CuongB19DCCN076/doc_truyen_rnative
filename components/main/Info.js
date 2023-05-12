import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { intiState } from "./Home";
import { addHistory, setChap } from "../../redux/actions";
export default function Info(props) {
  const data = useSelector((state) => {
    return state.test;
  });
  const theme = useSelector((state) => {
    return state.reTheme;
  });
  const history = useSelector((state) => {
    return state.historyItem;
  });
  console.log(history)
  const item = intiState.home.find((element) => element.id === data.idTruyen);
  const dispatch = useDispatch();
  const navi = props.navigation;
  const onHandleChap = (id) => {
    dispatch(setChap(id));
    dispatch(addHistory({idHistoryTruyen: data.idTruyen, idHistoryChap: id}))
    navi.navigate("Content")
  };
  const onHandleStart = () => {
    dispatch(setChap(1));
    dispatch(addHistory({idHistoryTruyen: data.idTruyen, idHistoryChap: 1}))
    navi.navigate("Content")
  };
  const onHandleEnd = () => {
    dispatch(setChap(item.chapter.length));
    dispatch(addHistory({idHistoryTruyen: data.idTruyen, idHistoryChap: item.chapter.length}))
    navi.navigate("Content")
  };
  return (
    <ScrollView style={{
      backgroundColor: theme.theme === "white" ? "white" : "black"
    }}>
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 30,
          fontWeight: "500",
          color: theme.theme === "white" ? "black" : "white"
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
            <Text style={{ fontSize: 20, marginLeft: 10,color: theme.theme === "white" ? "black" : "white" }}>{item.author}</Text>
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
            <Text style={{ fontSize: 16, marginLeft: 10, color: theme.theme === "white" ? "black" : "white" }}>{item.state}</Text>
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
                    borderColor: theme.theme === "white" ? "black" : "white",
                    padding: 5,
                    margin: 5,
                    color: theme.theme === "white" ? "black" : "white"
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
          <Text style={{color: theme.theme === "white" ? "black" : "white"}}>{item.introduce}</Text>
        </View>
        <View style={{flexDirection: "row", marginTop: 10}}>
          <TouchableOpacity onPress={() => onHandleStart()} style={{width: "48%", justifyContent: "center", borderColor: "green", borderWidth: 1, padding: 6, borderRadius: 5, backgroundColor: "green"}} >
            <Text style={{textAlign: "center", color: "white", fontSize: 14, fontWeight: "500"}}>
            Đọc từ đầu
            </Text>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => onHandleEnd()} style={{width: "48%", justifyContent: "center", borderColor: "orange", borderWidth: 1, padding: 6, borderRadius: 5, backgroundColor: "orange", marginLeft: 4}}>
            <Text style={{textAlign: "center", color: "white", fontSize: 14, fontWeight: "500"}}>
            Đọc chap mới nhất
            </Text>
          </TouchableOpacity>
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
                      color: theme.theme === "white" ? "black" : "white"
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
