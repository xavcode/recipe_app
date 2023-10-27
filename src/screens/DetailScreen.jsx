import { Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import axios from 'axios';

import ImageDetail from '../components/ImageDetail';
import getIngredientsNumber from '../helpers/getIngredientsNumber';
import YoutubeIframe from 'react-native-youtube-iframe';
import Misc from '../components/Misc';
import { StatusBar } from 'expo-status-bar';

const DetailScreen = ({ navigation, route, item }) => {
  const [mealData, setMealData] = useState(null)
  const data = route.params.item
  const idMeal = data.idMeal

  useEffect(() => {
    fetchMealWithId(idMeal)
  }, [])

  const fetchMealWithId = async (id) => {
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    {
      setMealData(response.data.meals[0])
    }
  }

  //todo!! implement search with name

  // const fetchMealWithName = async (name) => {
  //   const response = await axios.get('https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  //   console.log(response)
  // }

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
      <StatusBar style='dark' />
      <View style={{ flex: 1, marginBottom: 4 }}>
        <ImageDetail source={data.strMealThumb} navigation={navigation} />
      </View>

      <Text style={{ fontSize: 18, fontWeight: '500', color: '#FFA500', textAlign: 'center', marginVertical: 2, paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: 'lightgray', }}>{mealData?.strMeal}</Text>


      {/* Description Recipe */}

      <ScrollView style={{ flex: 1, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 3, marginHorizontal: 20, }}>
          <View style={{ flex: 1 / 2, borderEndWidth: 2, borderEndColor: '#FFA500', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', }}>{mealData?.strArea}
            </Text>
          </View>
          <View style={{ flex: 1 / 2, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', }}>{mealData?.strCategory}
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 3 }}>
        </View>

        <Misc />

        {/* Ingredients */}
        <View style={{ marginVertical: 10 }}>
          {getIngredientsNumber(mealData)?.map(i => {
            return (
              <View key={i} style={{ flexDirection: 'row', paddingHorizontal: 10, marginVertical: 1 }}>
                <FontAwesome name='minus-circle' size={15} color={'#FFA500'} />
                <Text style={{ fontSize: 15, fontWeight: '400', paddingHorizontal: 10 }}>
                  {mealData['strIngredient' + i]} {mealData['strMeasure' + i]}
                </Text>
              </View>
            )
          })}
        </View>

        {/* Instructrions */}
        <View style={{ marginVertical: 6, }}>
          <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 18, fontWeight: '500' }}>Instructions</Text>
          <Text style={{ paddingHorizontal: 10, textAlign: 'justify' }}>{mealData?.strInstructions}</Text>
        </View>

        {/* YoutubeVideo */}
        <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
          <YoutubeIframe
            height={300}
            play={false}
            videoId={mealData ? getIdYoutube(mealData.strYoutube) : null}
            webViewStyle={{ opacity: 0.99 }}
          />
        </View>
      </ScrollView>
    </View>
  )
}
export default DetailScreen  