import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const CategoriesFilter = ({ categories, activeCategory, handleCategories }) => {

  return (
    <View style={{ height: 150 }}>
      <Text style={{
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
      }}>
        Categories</Text>
      {/* Categories scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {categories?.map((category, idx) => {

          let isActive = category.strCategory == activeCategory
          return (
            <View key={idx} style={{ marginTop: 10 }} >
              <TouchableOpacity
                onPress={() => handleCategories(category.strCategory)}
                style={{
                  marginHorizontal: 15,
                }}
              >
                <View style={{
                  height: 60,
                  width: 60,
                  borderRadius: 38,
                  backgroundColor: isActive ? '#FFA500' : '#D6D3D1',
                }}>
                  <Image
                    source={{ uri: category.strCategoryThumb }}
                    style={{
                      flex: 1,
                      borderRadius: 40,
                      margin: 5,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <Text style={
                {
                  color: '#000',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',

                }}>
                {category.strCategory}
              </Text>
            </View>
          )
        }
        )}
      </ScrollView>
    </View>
  )
}

export default CategoriesFilter

const styles = StyleSheet.create({})