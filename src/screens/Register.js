import { StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { TextInput as MaterialTextInput, DefaultTheme, Provider as PaperProvider, Checkbox } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#1bb273', // Màu sắc chính cho TextInput
        text: 'black', // Màu sắc cho văn bản
        placeholder: '#999', // Màu sắc cho văn bản gợi ý
        background: 'white', // Màu sắc nền
    },
};
const Register = (props) => {
    const {navigation} = props
   
    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../image/imgLogin.png')} style={{ width: 100, height: 100 }} />
                </View>

                <View style={styles.textHeader}>
                    <Text style={styles.textHeaerLogin}>Creat New Accout</Text>
                </View>

                <View style={styles.main}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Image source={require('../image/icon_fb.png')} style={{ width: 42, height: 42, marginRight: 10 }} />
                        <Image source={require('../image/twitter_icon.png')} style={{ width: 40, height: 40, marginRight: 10 }} />
                        <Image source={require('../image/gg_icon.png')} style={{ width: 40, height: 40 }} />
                    </View>
                    <Text style={{ alignSelf: 'center', marginTop: 20 }}>or use your email account</Text>

                    {/* Các TextInput */}
                    <MaterialTextInput style={[styles.textInput, { marginTop: 30 }]} mode='outlined' label={'Email'} />
                    <MaterialTextInput style={[styles.textInput, { marginTop: 15 }]} mode='outlined' label={'Name'} />
                    <MaterialTextInput style={[styles.textInput, { marginTop: 15 }]} mode='outlined' label={'Password'} secureTextEntry={true} />

                    <TouchableOpacity style={{ marginTop: 30, backgroundColor: '#1bb273', marginHorizontal: 30, padding: 15, borderRadius: 15 }}>
                        <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', alignSelf: 'center' }}>Register</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginHorizontal: 30, marginTop: 20, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 17 }}>Already have an account? </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontSize: 17, color: '#1bb273' }}>Login here</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
        </PaperProvider>
    );
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1bb273',
    },
    header: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        height: 100,
        backgroundColor: '#C0C0C0',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        overflow: 'hidden',
        alignItems: 'center',
    },
    textHeaerLogin: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    },
    main: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        marginTop: -25,
    },
    textInput: {
        marginHorizontal: 30,
    },
})