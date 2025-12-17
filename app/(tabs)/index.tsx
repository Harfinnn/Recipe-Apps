import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLOR } from "@/constant/color";
import Header from "@/components/Header";
import axios from "axios";
import RecipeItem from "@/components/RecipeItem";

export interface recipeData {
    id: number;
    name: string;
    image: string;
    cookTimeMinutes: number;
    prepTimeMinutes: number;
    difficulty: string;
    rating: boolean;
}

const HomeScreen = () => {

    const random = Math.floor(Math.random() * 30) + 1;

    const [randomRecipe, setRandomRecipe] = useState<recipeData[]>([])
    const [recipes, setRecipes] = useState<Record<string, any>>({})

    const getRecipes = async () => {
        const res = await axios.get(`https://dummyjson.com/recipes/${random}`);
        setRecipes(res.data);
    };

    const getRandomRecipe = async () => {
        const { data } = await axios.get(`https://dummyjson.com/recipes?limit=10&skip=${random}&select=id,name,image,cookTimeMinutes,prepTimeMinutes,difficulty,rating`);

        setRandomRecipe(data.recipes);

    };

    useEffect(() => {
        getRecipes();
        getRandomRecipe();
    }, []);

    return (
        <LinearGradient colors={[COLOR.background, COLOR.border]} style={{ flex: 1 }}>
            <Header />

            <View style={styles.card}>
                <Image source={{ uri: recipes?.image }} style={styles.image} />

                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.85)"]}
                    style={styles.overlay}
                >
                    <Text style={styles.title}>{recipes?.name}</Text>
                    <Text style={styles.meta}>
                        ⭐ {recipes?.rating} • {recipes?.difficulty} • {recipes?.prepTimeMinutes + recipes?.cookTimeMinutes} min
                    </Text>
                </LinearGradient>
            </View>
            <View style={styles.sectionHeader}>
                <Text style={styles.randomText}>Random Recipe</Text>
            </View>
            <FlatList
                data={randomRecipe}
                renderItem={({ item }) => (
                    <RecipeItem
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        cookTimeMinutes={item.cookTimeMinutes}
                        prepTimeMinutes={item.prepTimeMinutes}
                        difficulty={item.difficulty}
                        rating={item.rating} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                contentContainerStyle={{ gap: 10 }}
                style={{ marginTop: 10, marginHorizontal: 10 }}
                
            />
        </LinearGradient>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    card: {
        margin: 16,
        borderRadius: 24,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 240,
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        padding: 16,
        width: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
        color: "white",
    },
    meta: {
        marginTop: 4,
        fontSize: 13,
        color: "#E5E5E5",
    },

    infoCard: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#2A221D",
        marginHorizontal: 16,
        borderRadius: 16,
        paddingVertical: 14,
        marginTop: 8,
    },
    randomText: {
        marginHorizontal: 16,
        marginTop: 6,
        fontSize: 18,
        fontWeight: "800",
        color: COLOR.textPrimary,
    },
    sectionHeader: {
        marginHorizontal: 16,
        marginBottom: 4,
        borderLeftWidth: 4,
        borderLeftColor: COLOR.primary,
        paddingLeft: 10,
      },
});

