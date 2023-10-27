import { TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SearchFilter = () => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 8, marginVertical: 16, paddingVertical: 8, justifyContent: 'space-between', }}>
      <TextInput style={{ paddingLeft: 8, fontSize: 16, }} placeholder='Beef asado'>
      </TextInput>
      <FontAwesome name='search' size={24} color={'#FFA500'}
        style={{ right: 10 }} />
    </View>
  )
}

export default SearchFilter