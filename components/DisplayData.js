import { Card } from "@rneui/base";
import { ScrollView, Text, StyleSheet, Image } from "react-native";

export default function DisplayData(props) {
  const { datas } = props;

  return (
    <ScrollView>
      {datas.map((data, index) => {
        return (
          <Card style={styles.cardDisplay} key={index}>
            <Text>NOM: {data.Nom}</Text>
            <Text>Prenom: {data.Prenom}</Text>
            <Text>Age: {data.age}</Text>
            <Text>Ville: {data.ville}</Text>
          </Card>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardDisplay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
