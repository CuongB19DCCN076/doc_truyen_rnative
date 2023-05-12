import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/auth/Login";
import Main from "./components/Main";
import Info from "./components/main/Info";
import Content from "./components/main/Content";
import Help from "./components/main/Help";

const Stack = createStackNavigator();
export default function Render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Thông tin truyện" component={Info} />
        <Stack.Screen name="Hỗ Trợ" component={Help} />
        <Stack.Screen name="Content" component={Content} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
