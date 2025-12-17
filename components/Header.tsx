import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { FC } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "@/constant/color";

interface Props {
  btnBack?: boolean
}

const Header: FC<Props> = ({ btnBack = false }) => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {btnBack && (
        <Pressable onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="arrow-back" size={22} color={COLOR.primary} />
        </Pressable>
      )}

      <Text style={styles.title}>Pizza Recipe</Text>

      <View style={styles.iconBtn} />
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  iconBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: COLOR.primary,
    letterSpacing: 0.5,
  },
});
