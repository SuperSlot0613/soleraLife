import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabNavigators from "./TabNavigators";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigators />
      </NavigationContainer>
      <StatusBar backgroundColor="#0c707d"  barStyle="light-content" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
