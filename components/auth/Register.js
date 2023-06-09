import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
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
import { auth, db } from "../../firebase";
import { getDatabase, ref, set } from "firebase/database";
export default function Register({ navigation }) {
  const [checkReg, setCheckReg] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onHandle = () => {
    const { name, email, password } = user;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(123333);
        
        setCheckReg(false);
        navigation.navigate("Login")
        // ...
      })
      .catch((error) => {
        console.log("lỗi");
        console.log(error);
        setCheckReg(true);
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../images/hn.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.top}></View>
        <View>
          <Text style={{fontSize: 38, fontWeight: "500", color: "#F26B8F"}}>Register</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(name) => setUser({ ...user, name: name })}
        />
        {checkReg && <Text style={{width: "80%", color: "red" }}>Tên không được chứa ký tự đặc biệt</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setUser({ ...user, email: email })}
        />
       {checkReg && <Text style={{width: "80%", color: "red" }}>Email phải có định dạng @gmail.com</Text>}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password: password })}
        />
       {checkReg && <Text style={{width: "80%", color: "red" }}>Password phải chứ từ 6 kí tự trở lên</Text>}
        <TouchableOpacity style={styles.button} onPress={() => onHandle()}>
          <Text style={{color: "white"}}>Đăng Ký</Text>
        </TouchableOpacity>
        <View style={{flexDirection: "row", marginTop: 6}}>
          <Text style={{color: "black", fontSize: 16}}>Bạn đã có tài khoản ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{color: "green", fontSize: 16,fontWeight: 500, textDecorationLine: "underline"}}>
              Login
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
    backgroundImage:
      "url(https://1.bp.blogspot.com/-ZlHlTYuJiAA/YDUfxNiY5bI/AAAAAAAA8ec/t2Pc4AfE9ZM_1hpc75zEuuMp9WmIo97FwCLcBGAsYHQ/s0/anh-nen-4k%2B%252819%2529.jpg)",
  },
  top: {
    marginTop: 120,
  },
  input: {
    width: "80%",
    margin: 10,
    marginHorizontal: 5,
    padding: 10,
    borderWidth: 2, // Độ dày của border
    borderColor: "green", // Màu của border
    borderRadius: 10, // Độ cong của góc
    color: "black",
    fontSize: 15,
    
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
