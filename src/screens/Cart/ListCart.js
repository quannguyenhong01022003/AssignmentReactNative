import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemListCart from './ItemListCart'

const ListCart = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => <ItemListCart cards={item} />}
        key={cards.name}
      />
    </View>
  )
}

export default ListCart

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

const cards = [
  {
      name: "Bun dau",
      url: 'https://cdn.tgdd.vn/Files/2021/07/02/1365019/an-bao-lau-nay-ban-co-biet-bun-dau-mam-tom-la-dac-san-o-dau-202206021309408488.jpeg',
      buy: 100,
      price: 35000,
      like: 100

  },
  {
      name: "Bun ca",
      url: 'https://cdn.tgdd.vn/Files/2021/09/11/1381884/cach-nau-bun-ca-ha-noi-thom-ngon-chuan-vi-202109111450370798.jpg',
      buy: 1000,
      price: 30000,
      like: 13

  },
  {
      name: "Pizza hut",
      url: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/ph2.jpg',
      buy: 150,
      price: 150000,
      like: 24

  },
  {
      name: "Tra dao",
      url: 'https://micaynagathuduc.com/wp-content/uploads/2022/07/tra-dao-3.jpg',
      buy: 1040,
      price: 25000,
      like: 251

  },
  {
      name: "Bun ca",
      url: 'https://cdn.tgdd.vn/Files/2021/09/11/1381884/cach-nau-bun-ca-ha-noi-thom-ngon-chuan-vi-202109111450370798.jpg',
      buy: 1000,
      price: 18000,
      like: 13

  },
  {
      name: "Pizza hut",
      url: 'https://www.pizzaexpress.vn/wp-content/uploads/2018/08/ph2.jpg',
      buy: 150,
      price: 350000,
      like: 24

  },
]