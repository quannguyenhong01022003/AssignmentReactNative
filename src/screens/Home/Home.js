import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import ItemProduct from './ItemProduct'
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.search}>
                <View style={{
                    backgroundColor: "#808080",
                    flexDirection: 'row',
                    flex: 1,
                    borderRadius: 8,
                    marginRight: 10
                }}>
                    <EvilIcons name="search" size={30} style={{ color: "black", position: 'absolute', top: 5, left: 5 }} />
                    <TextInput style={{ flex: 1, marginLeft: 40 }} onChangeText={(text) => setsearch(text)} />
                </View>

                <AntDesign name="menu-fold" size={40} style={{ color: "#808080", }} />

            </View>

            <FlatList
                data={products}
                renderItem={({ item }) => <ItemProduct product={item} />}
                key={products.name}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    search: {
        height: 40,
        margin: 15,
        flexDirection: 'row'
    },
})

const products = [
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