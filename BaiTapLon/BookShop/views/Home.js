import { View, Text,  TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',alignContent:'center',justifyContent:'center'}}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Cart')}>
          <Text>Next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home