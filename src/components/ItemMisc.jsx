import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../constant'

export default function ItemMisc({ text1, text2, icon }) {
  return (
    <View style={{
      padding: 8,
      borderRadius: 40,
      backgroundColor: colors.COLOR_PRIMARY
    }}>
      <View style={{
        flex: 1,
        padding: 6,
        backgroundColor: 'white',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        {icon}

      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }} > {text1} </Text>
        <Text style={{ fontSize: 12, fontWeight: '400', color: 'white' }}> {text2} </Text>
      </View>
    </View>
  )
}