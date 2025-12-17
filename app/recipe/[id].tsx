import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Header from "@/components/Header";

const DetailRecipe = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>

      <Header btnBack={true}/>

    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🍽 Detail Recipe</Text>
        <Text style={styles.recipeId}>Recipe ID: {id}</Text>

        <Text style={styles.description}>
          Ini adalah halaman detail recipe.  
          Nantinya kamu bisa menampilkan nama resep, bahan, dan cara memasak di sini.
        </Text>
      </View>
    </View>
    </View>
  );
};

export default DetailRecipe;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: "#22C55E",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 6,
  },
  recipeId: {
    fontSize: 14,
    color: "#22C55E",
    fontWeight: "600",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#64748B",
    lineHeight: 22,
  },
});
