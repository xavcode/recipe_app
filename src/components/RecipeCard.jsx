import { Image, StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const RecipeCard = ({ idx, item }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={{
        height: idx % 3 === 0 ? 150 : 275,
        width: '95%',
        backgroundColor: 'white',
        marginLeft: idx % 2 !== 0 ? 5 : 0,
        marginVertical: 20,
        borderRadius: 25,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 5,
      }}
      onPress={() => navigation.navigate('detail', { item: item })}
    >
      <View style={{ width: '100%', height: '100%' }}>
        <Image
          source={{ uri: item.strMealThumb }}
          style={{
            flex: 1,
            resizeMode: 'cover',
            borderRadius: 25,
          }} />
      </View>
      <Text ellipsizeMode='tail' numberOfLines={1} style={{ marginTop: 3, fontSize: 15 }}>
        {item.strMeal}
      </Text>
    </Pressable>
  )
}
export default RecipeCard