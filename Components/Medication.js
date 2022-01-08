import { Block, theme } from "galio-framework";
import React from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import tw from "tailwind-rn";
import Cards from "./Cards";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

const Medication = () => {
  const data = [
    {
      id: 1,
      image:
        "https://img.icons8.com/external-filled-outline-icons-maxicons/85/000000/external-capsule-virus-and-medical-filled-outline-icons-maxicons.png",
      mediname: "Xanax(1mg)",
      Oty: "120",
      Fills: "14",
      Rx: "32543782"
    },
    {
      id: 2,
      image:
        "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-capsule-science-and-technology-icongeek26-linear-colour-icongeek26.png",
      mediname: "Desyrel(2mg)",
      Oty: "120",
      Fills: "14",
      Rx: "32543782"
    },
    {
      id: 3,
      image:
        "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-capsule-health-care-and-medical-flatart-icons-lineal-color-flatarticons.png",
      mediname: "Prozak(1mg)",
      Oty: "120",
      Fills: "14",
      Rx: "32543782"
    },
    {
      id: 4,
      image:
        "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-capsule-health-care-and-medical-flatart-icons-lineal-color-flatarticons-3.png",
      mediname: "Abarelix(1mg)",
      Oty: "120",
      Fills: "14",
      Rx: "32543782"
    }
  ];

  return (
    <View style={tw("flex-1")}>
      <StatusBar backgroundColor="#0c707d" barStyle="light-content" />
      <View
        style={[{ backgroundColor: "#0c707d", width: "100%", height: 200 }]}
      >
        <Text
          style={{
            marginTop: 110,
            marginLeft: 10,
            fontSize: 34,
            color: "white"
          }}
        >
          Medication
        </Text>
        <Text style={{ marginLeft: 10, fontSize: 18, color: "#66adb6" }}>
          Current prescibed medication
        </Text>
      </View>
      <Block flex row={false} style={{ marginTop: 5 }}>
        <FlatList
          horizontal={false}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) =>
            <Block
              row={false}
              style={[{ margin: 20, height: 180 }, styles.shadow]}
            >
              <Block row style={{ alignItems: "center" }}>
                <Image
                  source={{
                    uri: item.image
                  }}
                  style={{ width: 30, height: 30, marginLeft: 10 }}
                />
                <Text style={{ marginLeft: 12, marginTop: 8, fontSize: 20 }}>
                  {item.mediname}
                </Text>
                <AntDesign
                  name="exclamationcircle"
                  size={24}
                  style={{
                    marginLeft: 110,
                    marginTop: 8,
                    color: "#36757c"
                  }}
                />
              </Block>
              <Block flex row={false} style={{ alignItems: "center" }}>
                <Block style={{ marginLeft: 15, marginTop: 10 }}>
                  <Text
                    style={{ fontSize: 14, fontWeight: "600", marginLeft: 25 }}
                  >
                    Direction: Take with food every morning. prescribed Dr.
                    Goldstein.
                  </Text>
                </Block>
                <Block
                  flex
                  row
                  style={{
                    justifyContent: "space-evenly",
                    marginLeft: 50,
                    marginTop: 10
                  }}
                >
                  <Block flex row={false} style={{}}>
                    <Text style={{ color: "gray" }}>QTY</Text>
                    <Text>
                      {item.Oty} days
                    </Text>
                  </Block>
                  <Block flex row={false}>
                    <Text style={{ color: "gray" }}>Fiils</Text>
                    <Text>
                      {item.Fills} left
                    </Text>
                  </Block>
                  <Block flex row={false}>
                    <Text style={{ color: "gray" }}>Rx</Text>
                    <Text>
                      {item.Rx}
                    </Text>
                  </Block>
                </Block>
                <Block
                  row
                  flex={0.4}
                  style={{
                    backgroundColor: "#e8e9ed",
                    marginBottom: 13,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    padding: 4
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://img.icons8.com/ios-glyphs/30/000000/--pocket-watch.png"
                    }}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text style={{color:"#aeb2b9"}}>1 pill daily every morning</Text>
                </Block>
              </Block>
              <View
                style={{
                  flex: 0.007,
                  width: "90%",
                  marginLeft: "5%",
                  backgroundColor: "#aeb2b9"
                }}
              />
            </Block>}
        />
      </Block>
    </View>
  );
};

export default Medication;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1
  }
});
