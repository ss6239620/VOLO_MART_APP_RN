import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductContainer = () => {
  const subjects = [
    { id: 1, name: 'card 1',color: "" },
    { id: 2, name: 'card 2' },
    { id: 3, name: 'card 3' },
    { id: 4, name: 'card 4' },
  ]
  const cardGap = 16;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3 )/ 2;
  return (
    <ScrollView>
      <View
        style={{
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            backgroundColor:'yellow'
        }}
      >
        {subjects.map((subject, i) => {
          return (
            <View
              key={subject.id}
              style={{
                marginTop: cardGap,
                marginLeft: i % 2 !== 0 ? cardGap : 0,
                width: cardWidth,
                height: 180,
                backgroundColor: 'white',
                overflow:'hidden',
                borderRadius: 16,
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                elevation:5,
                shadowColor: '#474545',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity>
                <Text>{subject.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  )
}

export default ProductContainer
