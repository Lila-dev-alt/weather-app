import * as React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

function SearchScreen() {
    const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState(null);
    const img = require('../assets/pexels-eberhard-grossgasteiger-2310713.jpg');
    return (
        <View style={{ flex: 1}}>
            <ImageBackground source={img} style = { styles.imagebackground } >
            <Text>Recherche</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Rechercher une ville"
                    value={text}
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
});
