import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnImg}>
        <Image style={styles.img} source={require('../image/user.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 20 }}>user@gmail.com</Text>
      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold', color: 'black' }}>Họ Tên</Text>
        <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 10 }}>Nguyễn Hồng Quân</Text>
        <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold', color: 'black' }}>Số điện thoại</Text>
        <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 10 }}>0329287880</Text>

        <TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Lịch sử mua hàng</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{'>'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 20}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Liên hệ hỗ trợ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf:'center', backgroundColor: 'red', width: 200, marginTop : 90, borderRadius: 10 }}>
          <Text style={{alignSelf:'center', padding: 10}}>Đổi thông tin tài khoản</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignSelf:'center', backgroundColor: 'red', width: 200, marginTop : 30, borderRadius: 10 }}>
          <Text style={{alignSelf:'center', padding: 10}}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1bb273'
  },
  img: {
    width: 80,
    height: 80
  },
  btnImg: {
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 80
  }

})