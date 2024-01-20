import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ItemListCart = (props) => {
  const {cards} = props
  return (
    <TouchableOpacity onPress={() => alert('Hi')}>
      <View style={{
        height: 150,
        flexDirection: 'row',
        padding: 10,
        marginTop: 5
      }}>
        <View>
          <Image source={{ uri: cards.url }}
            style={{ width: 120, height: 120, borderRadius: 10, resizeMode: 'cover' }}
          />
        </View>
        <View style={{ marginLeft: 15, flex: 1, padding: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{cards.name}</Text>
          <View style={{ height: 2, backgroundColor: 'black', marginBottom: 7 }} />
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text>
              {cards.buy} đã bán | {cards.like} đã thích
            </Text>
          </View>

          <View style={{ marginTop: 17, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 30, color: 'red', fontWeight: '500' }}>{cards.price} </Text>
              <Text >vnd</Text>
            </View>

            

          </View>



        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemListCart

const styles = StyleSheet.create({})