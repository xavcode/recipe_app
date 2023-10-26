import { Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import axios from 'axios';

import ImageDetail from '../components/ImageDetail';
import getIngredients from '../helpers/getIngredients';
import YoutubeIframe from 'react-native-youtube-iframe';

const DetailScreen = ({ navigation, route, item }) => {
  const [mealData, setMealData] = useState(null)
  const data = route.params.item
  const idMeal = data.idMeal

  useEffect(() => {
    fetchIdMeal(idMeal)
  }, [])

  const fetchIdMeal = async (id) => {
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    {
      setMealData(response.data.meals[0])
    }
  }
  const getIdYoutube = (url) => {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }

  return (
    //* Image Recipe
    <View style={{ flex: 1, backgroundColor: '#f2f2f2', }}>
      <View style={{ flex: 1, marginBottom: 4 }}>
        <ImageDetail source={data.strMealThumb} navigation={navigation} />
      </View>

      {/* Description Recipe */}

      <ScrollView style={{ flex: 1, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 2, marginHorizontal: 20, }}>
          <Text style={{ fontSize: 16, fontWeight: '500', textDecorationLine: 'underline' }}>{mealData?.strArea}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500', textDecorationLine: 'underline' }}>{mealData?.strCategory}</Text>
        </View>

        <View style={{ marginBottom: 3 }}>
        </View>

        {/* Ingredients */}
        <View style={{}}>
          {getIngredients(mealData)?.map(item => {
            return (
              <View key={item}>
                <Text style={{ fontSize: 14, fontWeight: '500', paddingHorizontal: 10 }}>
                  <FontAwesome name='minus-circle' size={14} color={'#FFA500'} />  |  {item}  | </Text>
              </View>
            )
          })}
        </View>

        {/* Preparation */}
        <View>
          <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 18, fontWeight: '500' }}>Instructions</Text>
          <Text style={{ paddingHorizontal: 10 }}>{mealData?.strInstructions}</Text>
        </View>

        {/* YoutubeVideo */}
        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
          <YoutubeIframe
            height={300}
            videoId={mealData ? getIdYoutube(mealData.strYoutube) : null}
            webViewStyle={{ opacity: 0.99 }}
          />
        </View>
      </ScrollView>
    </View>
  )
}
export default DetailScreen  