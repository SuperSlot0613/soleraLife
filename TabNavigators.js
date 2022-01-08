import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome,
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/HomeScreen";
import tw from "tailwind-rn";
import { Avatar } from "react-native-elements";
import Medication from "./Components/Medication";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

const TabNavigators = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Today") {
            return (
              <Ionicons name="ios-today-outline" size={24} color={color} />
            );
          } else if (route.name === "Medication") {
            return (
              <FontAwesome5 name="notes-medical" size={24} color={color} />
            );
          } else if (route.name === "Settings") {
            return <Feather name="settings" size={24} color={color} />;
          } else if (route.name === "Appointments") {
            return (
              <MaterialCommunityIcons
                name="calendar-clock"
                size={24}
                color={color}
              />
            );
          } else if (route.name === "Chat") {
            return (
              <Ionicons
                name="ios-chatbubble-ellipses-outline"
                size={24}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Avatar
                rounded
                source={{
                  uri:
                    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61cf0c01aed30b6ead90a841%2FElon-Musk-Awarded-With-Axel-Springer-Award-In-Berlin%2F960x0.jpg%3Ffit%3Dscale"
                }}
                size={24}
                activeOpacity={0.7}
                color={color}
              />
            );
          } else {
            return <Ionicons name="ios-finger-print" size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: "#0c707d",
        tabBarInactiveTintColor: "#a9a9a9"
      })}
    >
      <Tab.Group>
        <Tab.Screen
          name="Today"
          options={{
            headerShown: false
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false
          }}
          name="Medication"
          component={Medication}
        />
        <Tab.Screen
          options={{
            headerShown: false
          }}
          name="Appointments"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false
          }}
          name="Chat"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false
          }}
          name="Profile"
          component={HomeScreen}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabNavigators;

const styles = StyleSheet.create({});
