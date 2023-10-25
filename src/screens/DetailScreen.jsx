import { Image, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { arrowLeftCircle, } from "react-native-heroicons/solid";
import { ChevronLeftIcon, ClockIcon } from "react-native-heroicons/outline";

import axios from 'axios';

import getIngredients from '../helpers/getIngredients';
import Misc from '../components/Misc';
import ImageDetail from '../components/ImageDetail';

const DetailScreen = ({ navigation, route, item }) => {
  const [mealData, setMealData] = useState(null)
  const data = route.params.item
  const idMeal = data.idMeal

  useEffect(() => {
    fetchIdMeal(idMeal)
  }, [])


  const fetchIdMeal = async (id) => {
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    console.log(response.data.meals[0].idMeal)
    setMealData(response.data.meals[0])
  }

  // const ingredientes = getIngredients(mealData)

  return (
    //* Image Recipe
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <View style={{ flex: 1, marginBottom: 3 }}>
        <ImageDetail source={data.strMealThumb} />
      </View>

      {/* Description Recipe */}

      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
          <Text>{mealData?.strArea}</Text>
          <Text>{mealData?.strCategory}</Text>
        </View>

        <View style={{ marginBottom: 3 }}>
        </View>

        {/* Ingredients */}
        <View >
          {/* <Text>{mealData.idMeal}</Text> */}
          <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 18, fontWeight: '500' }}>Ingredients
          </Text>
          <View style={{ paddingHorizontal: 20 }}>
            {/* <View><Text>{ingredientes}</Text></View> */}

            <Text>Ingrediente 2</Text>
            <Text>Ingrediente 3</Text>
          </View>
        </View>


        {/* Preparation */}
        <View>
          <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 18, fontWeight: '500' }}>Instructions</Text>
          <Text>{mealData?.strInstructions}</Text>
        </View>


        {/* YoutubeVideo */}
        <View>
          {/* <Text>{mealData.idMeal}</Text> */}
          <Text>{mealData?.strYoutube}</Text>
        </View>
      </ScrollView>
    </View>
  )
}
export default DetailScreen