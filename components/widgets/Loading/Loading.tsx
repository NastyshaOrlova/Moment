import { Colors } from "@/constants";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./Loading.style";

export const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={Colors.primary} />
  </View>
);
