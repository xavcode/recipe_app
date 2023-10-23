import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipesContainer from '../components/RecipesContainer'
import axios from 'axios'


const URL_CATEGORIES = 'https://themealdb.com/api/json/v1/1/categories.php'

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Beef')
  const [categories, setCategories] = useState([])
  const [recipes, setRecipes] = useState([])

  //** Getting de Data **//     
  useEffect(() => {
    getCategories()
    getRecipes()
  }, [])

  //*-----Change Categories-----*/
  const handleCategories = category => {
    getRecipes(category)
    setActiveCategory(category)
    setRecipes([])
  }

  //*-----Get categories from api-----*/
  const getCategories = async () => {
    try {
      const result = await axios.get(URL_CATEGORIES);
      if (result.data) setCategories(result.data.categories)
    } catch (error) {
      console.log('Error', error)
    }
  }

  //*-----Get recipees from api-----*/
  const getRecipes = async (category = 'beef') => {
    try {
      const result = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      if (result.data) setRecipes(result.data.meals)
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, alignItems: 'stretch' }}>
      <Header />
      <SearchFilter />

      {/* In order to only render the CategoriesFilter component when has data, we wrap it in an conditional chaining 
      ⬇⬇ */}

      {categories.length > 0 &&
        <CategoriesFilter
          categories={categories}
          activeCategory={activeCategory}
          handleCategories={handleCategories}
        />}
      <RecipesContainer recipes={recipes} />
    </SafeAreaView>
  )
}