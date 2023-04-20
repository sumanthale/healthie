import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Banner } from "react-native-paper";
import { Image } from "react-native";

export const MealPlanScreen = ({ navigation }) => {
  return (
    <>
      <Ionicons
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 999 }}
        name="arrow-back-outline"
        size={28}
        color="black"
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 20,
        }}
      ></View>
    </>
  );
};
