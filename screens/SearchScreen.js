import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, StyleSheet, TextInput, Button} from "react-native";

function SearchScreen({navigation}) {
    const [text, setText] = React.useState();
    const [cities, setCities] = React.useState();
    const img = require('../assets/pexels-eberhard-grossgasteiger-2310713.jpg');
    let url = "https://api.openweathermap.org/data/2.5/weather?q=";


    const searchTown = () => {
        setText(text);
        url += text + '&appid=' + 'cb9f9f5777284842a8f5e0a78945b7ad' + '&units=metric';
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setCities(data);
                console.log(data);
            });
    }


    return (
        <View style={{flex: 1}}>
            <ImageBackground source={img} style={styles.imagebackground}>
                <Text>Rechercher une ville</Text>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={
                            text => setText(text)
                        }
                        placeholder="Rechercher une ville"
                        value={text}
                    />
                    <Button
                        title="save"
                        onPress={() => {
                            searchTown()
                            navigation.navigate('Results')
                        }}
                    />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}


export default SearchScreen;
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    imagebackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    }
});
