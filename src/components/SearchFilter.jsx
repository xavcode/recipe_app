import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SearchFilter = () => {
  return (
    <View style={styles.searchFilter}>
      <FontAwesome
        name='search' size={20} color={'#f96163'} s />
      <TextInput style={{ paddingLeft: 8, fontSize: 16, color: 'red' }} placeholder='Search your recipe'></TextInput>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
  searchFilter: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: '100%'

  }
})