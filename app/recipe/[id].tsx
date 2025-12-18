import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Header from "@/components/Header";
import axios from "axios";

const DetailRecipe = () => {
  const { id } = useLocalSearchParams();
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const getRecipe = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/recipe/${id}`);
      setRecipe(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#D84315" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header btnBack />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <Image source={{ uri: recipe.image }} style={styles.image} />

        <View style={styles.container}>
          {/* Title */}
          <Text style={styles.title}>{recipe.name}</Text>

          {/* Rating */}
          <Text style={styles.rating}>
            ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
          </Text>

          {/* Meta Info */}
          <View style={styles.metaContainer}>
            <Text style={styles.meta}>🔥 {recipe.difficulty}</Text>
            <Text style={styles.meta}>🍽 {recipe.servings} servings</Text>
            <Text style={styles.meta}>⏱ {recipe.cookTimeMinutes} min</Text>
          </View>

          {/* Extra Info */}
          <View style={styles.infoBox}>
            <Text style={styles.info}>🍳 Prep: {recipe.prepTimeMinutes} min</Text>
            <Text style={styles.info}>🔥 Calories: {recipe.caloriesPerServing} kcal</Text>
            <Text style={styles.info}>🌍 Cuisine: {recipe.cuisine}</Text>
          </View>

          {/* Tags */}
          <Text style={styles.sectionTitle}>Category</Text>
          <View style={styles.tagContainer}>
            {recipe.tags?.map((tag: string, index: number) => (
              <Text key={`tag-${index}`} style={styles.tag}>
                #{tag}
              </Text>
            ))}

            {recipe.mealType?.map((type: string, index: number) => (
              <Text key={`meal-${index}`} style={styles.mealTag}>
                {type}
              </Text>
            ))}
          </View>

          {/* Ingredients */}
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients?.map((item: string, index: number) => (
            <Text key={index} style={styles.listItem}>
              • {item}
            </Text>
          ))}

          {/* Instructions */}
          <Text style={styles.sectionTitle}>Instructions</Text>
          {recipe.instructions?.map((step: string, index: number) => (
            <Text key={index} style={styles.step}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailRecipe;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 240,
  },

  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 12,
  },

  metaContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },

  meta: {
    backgroundColor: "#FFF3E0",
    color: "#D84315",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 20,
    marginBottom: 10,
  },

  listItem: {
    fontSize: 15,
    color: "#475569",
    marginBottom: 6,
  },

  step: {
    fontSize: 15,
    color: "#475569",
    marginBottom: 10,
    lineHeight: 22,
  },

  rating: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 12,
  },

  infoBox: {
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 12,
    gap: 6,
  },

  info: {
    fontSize: 14,
    color: "#334155",
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    gap: 10,
  },

  tag: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    color: "#475569",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    fontSize: 11,
    fontWeight: "500",
  },

  mealTag: {
    borderWidth: 1,
    borderColor: "#C7D2FE",
    color: "#4338CA",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    fontSize: 11,
    fontWeight: "500",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});

