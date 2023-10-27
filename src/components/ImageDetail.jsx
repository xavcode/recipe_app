import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome';

const ImageDetail = ({ source, navigation }) => {

  return (
    <View style={{
      flex: 1,
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
      <View style={{ flexDirection: 'row', position: 'absolute', width: '100%', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ marginHorizontal: 15, marginTop: 30, opacity: .9 }}>
            <FontAwesome name='chevron-circle-left' size={50} color='#FFA500' />
          </View>
        </TouchableOpacity>

        {/* //Todo add the feature to add to a list of favourites. */}
        {/* <View style={{ marginHorizontal: 25, marginTop: 40, opacity: .6 }}>
          <FontAwesome name='heart' size={50} color='white' />
        </View> */}
      </View >
    </View >
  )
}

export default ImageDetail