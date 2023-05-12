
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../firebase";
export default function Login({ navigation }) {
  const [checkLogin, setCheckLogin] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onHandle = () => {
    const { email, password } = user;
    console.log(email, password);
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setCheckLogin(false)
        navigation.navigate("Main");
        // ...
      })
      .catch((error) => {
        console.log("lỗi");
        console.log(error);
        setCheckLogin(true)
        // ..
      });
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../images/hn.jpg")} resizeMode="cover" style={styles.image}>
        <View style={styles.top}></View>
        <View>
          <Text style={{fontSize: 38, fontWeight: "500", color: "#F26B8F"}}>Login</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setUser({ ...user, email: email })}
        />
       
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password: password })}
        /> 
        {checkLogin && <Text style={{alignItems: "flex-start", marginTop: 15,color: "red"}}>Email hoặc Mật khẩu chưa chính xác</Text>}
        <TouchableOpacity style={styles.button} onPress={() => onHandle()} >
          <Text style={{color: "white"}}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={{flexDirection: "row", marginTop: 6}}>
          <Text style={{color: "black", fontSize: 16}}>Bạn chưa có tài khoản ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{color: "green", fontSize: 16, fontWeight: 500, textDecorationLine: "underline"}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    marginTop: 150,
  },
  input: {
    width: "80%",
    marginTop: 15,
    marginHorizontal: 5,
    padding: 10,
    borderWidth: 2, // Độ dày của border
    borderColor: "green", // Màu của border
    borderRadius: 10, // Độ cong của góc
    color: "black",
    fontSize: 15
  },
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
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
