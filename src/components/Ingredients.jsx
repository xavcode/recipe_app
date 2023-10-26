import { View, Text } from 'react-native'

import getIngredients from '../helpers/getIngredients'

const Ingredients = async (data) => {

  // const ingredients =  getIngredients(data)
  // console.log(ingredients)
  console.log(data)
  return (
    <View>
      <Text>Ingredientss</Text>
    </View>
  )
}

export default Ingredients