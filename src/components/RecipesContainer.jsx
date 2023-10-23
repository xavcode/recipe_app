import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import RecipeCard from './RecipeCard'
import MasonryList from '@react-native-seoul/masonry-list'
import Loading from './Loading'

const RecipesContainer = ({ recipes }) => {
  return (
    <View style={{ flex: 1, }}>

      <Text style={{ color: '#000', fontSize: 22, fontWeight: '700' }}>Recipes</Text>

      {recipes.length === 0 ? <Loading /> :
        <MasonryList
          data={recipes}
          keyExtractor={(item) => item.idMeal}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => <RecipeCard
            idx={i}
            item={item}
          >
          </RecipeCard>}
        />
      }

    </View>
  )
}

export default RecipesContainer

const styles = StyleSheet.create({})