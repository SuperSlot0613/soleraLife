import { StatusBar } from "expo-status-bar";
import { Block, theme } from "galio-framework";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import tw from "tailwind-rn";
import Cards from "./Cards";
import { Avatar } from "react-native-elements";

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      image:
        "https://img.icons8.com/external-filled-outline-icons-maxicons/85/000000/external-capsule-virus-and-medical-filled-outline-icons-maxicons.png",
      mediname: "Xanax(1mg)",
      Oty: "120",
      Fills: "14"
    },
    {
      id: 2,
      image:
        "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-capsule-science-and-technology-icongeek26-linear-colour-icongeek26.png",
      mediname: "Desyrel(2mg)",
      Oty: "120",
      Fills: "14"
    },
    {
      id: 3,
      image:
        "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-capsule-health-care-and-medical-flatart-icons-lineal-color-flatarticons.png",
      mediname: "Prozak(1mg)",
      Oty: "120",
      Fills: "14"
    },
    {
      id: 4,
      image:
        "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-capsule-health-care-and-medical-flatart-icons-lineal-color-flatarticons-3.png",
      mediname: "Abarelix",
      Oty: "120",
      Fills: "14"
    }
  ];

  return (
    <View style={tw("flex-1")}>
      <StatusBar backgroundColor="#0c707d"  barStyle="light-content" />
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
          Good Morning!
        </Text>
        <Text style={{ marginLeft: 10, fontSize: 18, color: "#66adb6" }}>
          Thursday, April 15th
        </Text>
      </View>
      <Block row={false} style={[{ width: "100%", height: 340 }]}>
        <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 18 }}>
          Today's Medication
        </Text>
        <FlatList
          horizontal={true}
          keyExtractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) =>
            <Cards
              Key={index}
              image={item.image}
              name={item.mediname}
              Oty={item.Oty}
              fills={item.Fills}
            />}
        />
      </Block>
      <Block flex row={false}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            marginLeft: 20,
            color: "black"
          }}
        >
          Next Appointment
        </Text>
        <Block
          flex={0.8}
          card
          style={[
            {
              width: "90%",
              marginLeft: 20,
              marginTop: 10,
              backgroundColor: "white"
            },
            styles.shadow
          ]}
        >
          <TouchableOpacity>
            <Block
              row
              style={{
                display: "flex",
                margin: 10,
                padding: 10,
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <Block
                flex
                row={false}
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ fontSize: 16,color:"#3c757d" }}>APR</Text>
                <Text style={{ fontSize: 18 }}>16</Text>
              </Block>
              <Block style={styles.verticleLine} />
              <Block
                flex
                row={false}
                styel={{ alignItems: "center", justifyContent: "center" }}
              >
                <Text>Dr. Godistein</Text>
                <Text>12.00 pm</Text>
              </Block>
              <Block
                flex
                row={false}
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Avatar
                  rounded
                  source={{
                    uri:
                      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61cf0c01aed30b6ead90a841%2FElon-Musk-Awarded-With-Axel-Springer-Award-In-Berlin%2F960x0.jpg%3Ffit%3Dscale"
                  }}
                  size={40}
                  activeOpacity={0.7}
                />
              </Block>
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.7,
    elevation: 2,
    borderColor: "white"
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#eeeff0",
    margin: "auto",
    marginRight: 20
  }
});
