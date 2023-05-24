import { ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity,Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import HeaderTab from '../src/components/HeaderTab';
// adb reverse tcp:54722 tcp:54722


const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getData = async () => {
    fetch('http://127.0.0.1:8000/products_all')
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson)
        setLoading(false);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderTab />
        {!isLoading ? (
          data.map((item) =>
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Product")}>
              <View>
                <ImageBackground
                  source={{ uri: `${item.thumbnail}` }}
                  style={{
                    height: 170,
                    width: '100%'
                  }}
                >
                  <View style={{ position: 'absolute', top: 80, left: 0, right: 0, bottom: 0, alignItems: 'baseline' }}>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: '600' }}>{item.product_name}</Text>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '400' }}>{item.description}</Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.distance} >Chinese</Text>
                <Text style={styles.price}>
                  ₹{item.price}
                </Text>
              </View>
            </TouchableOpacity>
          )
        ) :
          (<View><Text>Loadiing....</Text></View>
          )}
      </View>
    </ScrollView >
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center'
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: '100%',
    marginBottom: 6,
  },
  cardText: {
    padding: 10,
    width: '100%',
    flexDirection: 'row'
  },
  distance: {
    fontSize: 20,
    color: 'black'
  },
  price: {
    color: "#777",
    paddingTop: 5,
    marginLeft: '60%'
  },
})