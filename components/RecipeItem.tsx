import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { FC } from "react";
import { COLOR } from "@/constant/color";
import { recipeData } from "@/app/(tabs)";
import { useRouter } from "expo-router";

const RecipeItem: FC<recipeData> = ({
    id,
    name,
    image,
    cookTimeMinutes,
    prepTimeMinutes,
    difficulty,
    rating,
}) => {

    const router = useRouter()

    const totalTime = cookTimeMinutes + prepTimeMinutes;

    return (
        <TouchableOpacity activeOpacity={0.85} style={styles.card} onPress={() => router.push(`/recipe/${id}`)}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>

            <View style={styles.ratingBadge}>
                <Text style={styles.ratingText}>⭐ {rating}</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>
                    {name}
                </Text>
                <Text style={styles.time}>⏱ {totalTime} min</Text>
            </View>
        </TouchableOpacity>
    );
};

export default RecipeItem;

const styles = StyleSheet.create({
    card: {
        width: 180,
        height: 220,
        borderRadius: 16,
        backgroundColor: COLOR.backgroundLight,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: COLOR.border,
    },

    image: {
        width: "100%",
        height: "100%",
    },

    imageContainer: {
        height: 140
    },

    content: {
        padding: 10,
        backgroundColor: COLOR.backgroundLight,
    },

    title: {
        fontSize: 14,
        fontWeight: "700",
        color: COLOR.textDark,
        marginBottom: 4,
    },

    time: {
        fontSize: 12,
        color: COLOR.textDark,
    },

    ratingBadge: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: COLOR.background,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },

    ratingText: {
        color: "#FACC15",
        fontSize: 12,
        fontWeight: "700",
    },
});

