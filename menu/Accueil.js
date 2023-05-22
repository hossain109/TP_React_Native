import { ScrollView, Text, StyleSheet, Image } from "react-native";
import React from "react";
import * as RNElements from "@rneui/base";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";

const Accueil = ({ navigation }) => {
  //onPress To Navigate

  return (
    <ScrollView style={styles.container}>
      <Image
        style={{
          width: 400,
          height: 150,
          display: "block",
          margin: "auto",
        }}
        source={require("../assets/g2rlogo1.png")}
      />
      <Text style={styles.textTitle}>Bienvenue chez G2R</Text>
      <CardTitle style={{ marginTop: 10 }}>
        Vous pouvez voir lsite des contact des étudiants CDA1{" "}
      </CardTitle>
      <RNElements.Button
        title="Liste des contacts"
        onPress={() => navigation.navigate("Liste")}
        style={{
          marginTop: 20,
        }}
      />
      <p style={styles.title}>Dévélopper par HOSSAIN Mohammad</p>
    </ScrollView>
  );
};

export default Accueil;

const styles = StyleSheet.create({
  textTitle: {
    flex: 1,
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
  title: {
    marginTop: 40,
    textAlign: "center",
  },
  container: {
    marginTop: 100,
  },
});
