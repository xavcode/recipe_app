import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'

const ImageDetail = ({ source }) => {

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'gray',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      overflow: 'hidden'

    }}>
      <Image
        source={{ uri: source }}
        style={{
          flex: 1,
        }}
      />
    </View>
  )
}

export default ImageDetail