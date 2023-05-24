import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Product = () => {
    return (
      <View>
        <Image
          source={require('../../assets/test.webp')}
          style={{ width: '100%', height: 200 }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
          Product Name
        </Text>
        <Text style={{ fontSize: 16, margin: 10 }}>
          Mast hai kharred lo
        </Text>
        <Text style={{ fontSize: 16, margin: 10 }}>
          Rating : 4.5/5.0 (100 ratings)
        </Text>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Comments
          </Text>
          <Text style={{ fontSize: 16 }}>
            "This is a great product. I would highly recommend it to anyone."
          </Text>
          <Text style={{ fontSize: 16 }}>
            "I love this product. It has exceeded my expectations."
          </Text>
        </View>
      </View>
    )
  }

export default Product

const styles = StyleSheet.create({})