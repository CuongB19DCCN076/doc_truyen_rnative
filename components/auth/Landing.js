import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";

export default function Landing({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        gap: 10,
      }}
    >
      <ImageBackground
        source={require("../../images/hn.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontWeight: "500",
              color: "#F20CB5",
            }}
          >
            Chào mừng bạn đến với thế giới truyện tranh
          </Text>
        </View>
        <View style={{
            position: "absolute",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "400",
              color: "#F26B8F",
              marginBottom: 20,
              marginHorizontal: 5
            }}
          >
            Nơi cập nhật những bộ truyện hot, truyện hay, truyện mới nhất hiện
            nay
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{color: "white"}}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{color: "white"}}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
    width: 250,
    backgroundColor: "green",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    gap: 10,
  },
});
