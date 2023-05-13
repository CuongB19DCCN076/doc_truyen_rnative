import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
// Required for side-effects
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./main/Home";
import Profile from "./main/Profile";
import { useDispatch } from "react-redux";
import History from "./main/History";
import { child, get, getDatabase, ref } from "firebase/database";
const Tab = createBottomTabNavigator();
export var dataUsers = [];
function Main() {
  const dispatch = useDispatch();

  // Create a reference to the SF doc.
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../images/home.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../images/his.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../images/profile.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
export default Main;
