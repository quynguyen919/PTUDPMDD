import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import { COLOURS } from '../Coler';

const items = [
  { id: 1, name: "Tôi thấy hoa Vàng trên cỏ xanh", price: 190000, image: require('../assets/images/Nguyen_Nhat_Anh_1.png') },
  { id: 2, name: "Cho tôi xin một Vé đi tuổi thơ", price: 190000, image: require('../assets/images/Nguyen_Nhat_Anh_2.png') },
  { id: 3, name: "Cho tôi xin một Vé đi tuổi thơ", price: 190000, image: require('../assets/images/Nguyen_Nhat_Anh_2.png') },
  { id: 4, name: "Cho tôi xin một Vé đi tuổi thơ", price: 190000, image: require('../assets/images/Nguyen_Nhat_Anh_2.png') },
]

const Home = ({ navigation }) => {
  const HeaderComponent = () => {
    return (
      <View style={[{ flex: 1 }]}>
        <Text style={styles.title}>Sách</Text>
      </View>
    );
  };

  const ItemSeperator = () => {
    return (
      <View style={styles.seperator} />
    )
  };

  const ItemBox = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailBook')}
      style={{
        width: '50%',
        alignItems: 'center',
        // marginVertical: 14,
        backgroundColor: 'green'
      }}
    >
      <View style={styles.product}>
        <Image style={styles.img_prod} source={item.image} />
        <View style={styles.prod_details}>
          <TouchableOpacity>
            <Text style={styles.prod_name}>{item.name}</Text>
          </TouchableOpacity>
          <Text style={styles.prod_price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems:'center',
          // flexWrap: 'wrap',
          justifyContent: 'space-around',
          backgroundColor: 'red',
          // flex: 1
        }}>
        {/* {items.map(data => {
          return <ItemBox data={data} key={data.id} />;
        })} */}
        {/* <FlatList
        ListHeaderComponent={HeaderComponent}
        ItemSeperatorComponent={ItemSeperator}
        keyExtractor={(item, index) => index}
        data={items}
        renderItem={ItemBox}
        numColumns={2}
      /> */}

        {
          items.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('DetailBook')}
              style={{
                width:Dimensions.get('window').width,
                flexDirection:"row",
                justifyContent:'center',
                width: '50%',
                alignItems: 'center',
                padding:10,
                justifyContent:'center',
                marginVertical: 14,
                backgroundColor: 'green'
              }}
            >
              <View style={styles.product}>
                <Image style={styles.img_prod} sourcree={item.image} />
                <View style={styles.prod_details}>
                  <TouchableOpacity>
                    <Text style={styles.prod_name}>{item.name}</Text>
                  </TouchableOpacity>
                  <Text style={styles.prod_price}>{item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start'
    // width: '100%',
    // height: '100%',
    // backgroundColor: COLOURS.green,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
    marginTop: 10,
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
    // flexDirection: "column",
    flex: "center",
  },
  product: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    border: "1px solid black",
    borderRadius: 10,
    width: 150,
  },
  img_prod: {
    width: 100,
    height: 200,
    marginTop: 10,
    marginLeft: 25,
  },
  prod_details: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  prod_name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    width: 150,
  },
  prod_price: {
    fontSize: 13,
    color: "black",
  },
});