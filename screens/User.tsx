import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';
import ProductContainer from '../src/components/ProductContainer';
import Search from '../src/components/Search';

const { width } = Dimensions.get('window');

const IMAGES = [
  {
    id: 1,
    imageUri: require('../assets/test.webp'),
  },
  {
    id: 2,
    imageUri: require('../assets/test.webp'),
  },
  {
    id: 3,
    imageUri: require('../assets/test.webp'),
  },
  {
    id: 4,
    imageUri: require('../assets/test.webp'),
  },
];

const User = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = event.nativeEvent.contentOffset.x / slideSize;
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Search />
        <Text style={styles.text}>Top Products</Text>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          style={styles.scrollView}
        >
          {IMAGES.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image style={styles.image} source={item.imageUri} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {IMAGES.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.paginationDot,
                index === activeIndex ? styles.paginationDotActive : null,
              ]}
            />
          ))}
        </View>
        <ProductContainer img={"../"}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    left: 15,
  },
  scrollView: {
    width,
  },
  card: {
    width: width - 20,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 16,
  },
  pagination: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:20
  },
  paginationDot: {
    width: 13,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: 'gray',
  },
  paginationDotActive: {
    backgroundColor: 'orange',
  },
});
export default User