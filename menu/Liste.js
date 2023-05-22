import { View, Text, StyleSheet } from "react-native";
import React from "react";
import * as RNElements from "@rneui/base";
import Datas from "../components/datas.json";
import DisplayData from "../components/DisplayData";

const Liste = () => {
  return (
    <View style={styles.containerList}>
      <DisplayData datas={Datas} />
    </View>
  );
};

export default Liste;

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
});
