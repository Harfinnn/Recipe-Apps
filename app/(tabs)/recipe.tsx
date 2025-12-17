import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { COLOR } from "@/constant/color";
import RecipeItem from "@/components/RecipeItem";
import TagsItem from "@/components/TagsItem";

const RecipeScreen = () => {

  const [recipes, setRecipes] = useState<any[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [name, setName] = useState<string>("");

  const getRecipes = async () => {

    if (!name) {
      const { data } = await axios.get('https://dummyjson.com/recipes?limit=50&select=id,name,image,cookTimeMinutes,prepTimeMinutes,difficulty,rating');
      setRecipes(data.recipes);
    } else {
      const { data } = await axios.get(
        `https://dummyjson.com/recipes/tag/${name}`
      );
      setRecipes(data.recipes);
    }
  };

  const handleChangeRecipe = async (name: string) => {
    setName(name);
  };

  const getTags = async () => {
    const { data } = await axios.get('https://dummyjson.com/recipes/tags');

    setTags(data)
  }

  useEffect(() => {
    getRecipes();
    getTags();
  }, [name]);

  return (
    <LinearGradient colors={[COLOR.background, COLOR.border]} style={{ flex: 1 }}>

      <Header />
      <View>
        <FlatList
          data={tags}
          renderItem={({ item }) => <TagsItem name={item} handleChangeRecipe={handleChangeRecipe} selectedName = {name} />}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            gap: 10,
          }}
        />

      </View>

      <View style={{ flex: 1, margin: 10 }}>
        <FlatList
          data={recipes}
          numColumns={2}
          contentContainerStyle={{ gap: 16 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <RecipeItem
              id={item.id}
              name={item.name}
              image={item.image}
              cookTimeMinutes={item.cookTimeMinutes}
              prepTimeMinutes={item.prepTimeMinutes}
              difficulty={item.difficulty}
              rating={item.rating}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </LinearGradient>
  );
};


export default RecipeScreen;

const styles = StyleSheet.create({

});
