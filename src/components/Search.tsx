import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'

const Search = () => {

  const [search, setSearch] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search..'
        style={styles.input}
        value={search}
        onChangeText={text=>setSearch(text)}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    padding:10,
  },
  input:{
    backgroundColor:'white',
    elevation:5,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowOpacity:6,
    shadowRadius:6,
    padding:10,
    borderRadius:10
  }
})