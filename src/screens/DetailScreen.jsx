import { Image, Text, Pressable, View, ScrollView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Loading from '../components/Loading'
import { ChevronLeftIcon, ClockIcon } from "react-native-heroicons/outline";
import { HeartIcon, } from "react-native-heroicons/solid";
import { colors } from '../constant';
import axios from 'axios';
import Misc from '../components/Misc';



const DetailScreen = ({ navigation, route }) => {
  const [isFavourite, setIsFavourite] = useState(false)
  const [mealData, setMealData] = useState({})
  const { item } = route.params
  const windowHeight = Dimensions.get('window').height;

  //*-----Get recipees from api-----*/

  useEffect(() => {
    const getMealData = async (id) => {
      try {
        const result = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (result.data)
          setMealData(result.data.meals[0])
      } catch (error) {
        console.log('Error', error)
      }
    }
    getMealData(item.idMeal)
  }, [])


  const getIngredients = (mealData) => {

    if (!mealData) return []
    let ingredients = []
    for (let i = 1; i <= 20; i++) {
      if (mealData['strIngredient' + i])
        ingredients.push(i)
    }
    return ingredients
  }

  // Get the Id of the youtube video with a regexp
  const getYoutubeId = url => {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={{
      flex: 1
    }}>
      <StatusBar style='light' />

      {/* Recipe Image */}
      <View style={{ height: windowHeight * 0.5, width: '100%' }}>
        <Image
          source={{ uri: item.strMealThumb }}
          style={{
            flex: 1,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
      </View>

      {/* Back Button and Favourite Icon */}
      <View style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        marginTop: 40,
        paddingHorizontal: 20,
      }}>
        <Pressable onPress={() => navigation.goBack()} style={{
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: 20,
          opacity: .85,
        }}>
          <ChevronLeftIcon strokeWidth={4.5} size={28} color={colors.COLOR_PRIMARY} />
        </Pressable>

        <Pressable style={{
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: 20,
          opacity: .85,
        }}
          onPress={() => setIsFavourite(!isFavourite)}
        >
          <HeartIcon strokeWidth={4.5} size={32}
            color={isFavourite ? colors.COLOR_PRIMARY : 'gray'} />
        </Pressable>
      </View>


      {/** Content of the recipe **/}
      <View style={{ flex: 1, marginHorizontal: 12, marginVertical: 8, }}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 22,
            fontWeight: '500',
          }}>
          {item.strMeal}
        </Text>
        <Text style={{ fontSize: 18, marginTop: 4 }}>
          {mealData?.strArea}
        </Text>

        {/* Misc */}
        {/* <Misc /> */}

        <Text style={{ fontSize: 22, fontWeight: '600', marginTop: 8, }}>Ingredients</Text>


        {/*Ingredients */}
        <View style={{ marginTop: 8 }}>
          {getIngredients(mealData).map(i => (
            <View key={i} style={{
              marginTop: 4,
              marginLeft: 8,
              gap: 12,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
              <View style={{
                height: 12,
                width: 12,
                backgroundColor: colors.COLOR_PRIMARY,
                borderRadius: 10
              }}>
              </View>
              <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontSize: 16, fontWeight: '400' }}>{mealData['strIngredient' + i]} {mealData['strMeasure' + i]} </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Instructions */}
        <View>
          <Text style={{ fontSize: 22, fontWeight: '600', marginTop: 8, }}>Instructions</Text>

          <Text style={{ textAlign: 'justify', fontSize: 15, lineHeight: 24 }}>
            {mealData?.strInstructions}
          </Text>
        </View>

        {/* Youtube Recipe Video */}

        {/* {mealData.strYoutube ?
          <View style={{ marginTop: 12, }}>
            <View >
              < Text style={{marginBottom:8}}> {mealData.strYoutube} </Text>
              <YoutubePlayer
                height={300}
                play={false}
                videoId={getYoutubeId(mealData.strYoutube)}
              />
            </View>
          </View> : null
        } */}

      </View>



    </ScrollView >
  )
}
export default DetailScreen
