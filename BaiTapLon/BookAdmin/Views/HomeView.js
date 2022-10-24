import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

// const items = [
//     {id: 1, name: 'Item 1', price: 100, image: require('../assets/cat1.png'), rating: '* * * *'},
//     {id: 2, name: 'Item 1', price: 100, image: require('../assets/cat1.png'), rating: '* * * *'},
//     {id: 3, name: 'Item 1', price: 100, image: require('../assets/cat1.png'), rating: '* * * *'},
//     {id: 4, name: 'Item 1', price: 100, image: require('../assets/cat1.png'), rating: '* * * *'},
//     {id: 5, name: 'Item 1', price: 100, image: require('../assets/cat1.png'), rating: '* * * *'},
// ]

const HomeView = ({navigation,}) => {
    // const HeaderComponent = () => {
    //     return(
    //         <View style={styles.header}>
    //             <Text style={styles.title}>
    //                 Thú cưng
    //             </Text>
    //         </View>
    //     )
    // }

    // const ItemSeparator = () => {
    //     return <View style={styles.separator} />
    // }

    // const ItemBox = ({item}) => (
    //     <TouchableOpacity>
    //     <View style={styles.product}>
    //         <Image style={styles.img_prod} source={item.image} />
    //         <View style={styles.prod_details}>
                
    //                 <Text style={styles.prod_name}>{item.name}</Text>
                
    //             <Text style={styles.prod_price}>{item.price} VND</Text>
    //             <Text style={styles.prod_rating}>{item.rating}</Text>
    //         </View>
    //     </View>
    //     </TouchableOpacity>
    // )
    // return(
    //     <View style={styles.container}>
    //         <FlatList 
    //         ListHeaderComponent={HeaderComponent}
    //         ItemSeparatorComponent={ItemSeparator}
    //         keyExtractor={(item,index) => index}
    //         data = {items}
    //         renderItem={ItemBox}
    //         />
    //         <View style={styles.button}>
    //         <View style={styles.create}>
    //             <Button title='Create' onPress={() => navigation.navigate('Create')} />
    //         </View>
    //         <View style={styles.edit}>
    //             <Button  title='Edit' onPress={() => navigation.navigate('Edit')} />
    //         </View>
    //     </View>
    //     </View>
    // )
    const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('@storage_key');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async newValue => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <View style={{ margin: 40 }}>
      <Text>Current value: {value}</Text>
      <TouchableOpacity
        onPress={() =>
          writeItemToStorage(
            Math.random()
              .toString(36)
              .substr(2, 5)
          )
        }
      >
        <Text>Update value</Text>
      </TouchableOpacity>
    </View>
  );

}
    
;
export default HomeView;

const styles = StyleSheet.create({
    edit: {
        flex: 1,
        width: 50,
    },
    create: {
        flex: 1,
        width: 50,
    },
    button: {
        flexDirection: 'row',
    },
    header: {
        flex: 1,
        alignItems: 'left',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#000',
    },
    product: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    img_prod: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    prod_details: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
    },
    prod_name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        flexWrap: 'wrap',
    },
    prod_price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    prod_rating: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
});
