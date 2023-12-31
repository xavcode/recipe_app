import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
      <Text style={{ flex: 1, fontSize: 22, fontWeight: '700' }}>Welcome</Text>
      <FontAwesome name="bell-o" size={24} color="#FFA500" />
    </View>
  )
}

export default Header
