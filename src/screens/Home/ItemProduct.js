import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ItemProduct = (props) => {
  const { product } = props
  return (
    <TouchableOpacity onPress={() => alert('Hi')}>
      <View style={{
        height: 150,
        flexDirection: 'row',
        padding: 10,
        marginTop: 5
      }}>
        <View>
          <Image source={{ uri: product.url }}
            style={{ width: 120, height: 120, borderRadius: 10, resizeMode: 'cover' }}
          />
        </View>
        <View style={{ marginLeft: 15, flex: 1, padding: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{product.name}</Text>
          <View style={{ height: 2, backgroundColor: 'black', marginBottom: 7 }} />
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text>
              {product.buy} đã bán | {product.like} đã thích
            </Text>
          </View>

          <View style={{ marginTop: 17, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 30, color: 'red', fontWeight: '500' }}>{product.price} </Text>
              <Text >vnd</Text>
            </View>

            <TouchableOpacity style={{backgroundColor:'#999', width: 20, height: 20, marginTop: 15}}>
              <Text style={{fontWeight:'bold', alignSelf: 'center'}}>+</Text>
            </TouchableOpacity>

          </View>



        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemProduct

const styles = StyleSheet.create({})