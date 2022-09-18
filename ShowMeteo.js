import React from 'react';
import {Text, TextInput, View, Image, StyleSheet} from 'react-native';

function ShowMeteo({
   temp,
   tempMax,
   tempMin,
   humidity,
   city,
   country,
    weatherDescription,
   img
}) {

    return (
        <View style={styles.container}>
        <View style={ styles.weather }>
                <Text style={ styles.title }>{city}, {country}</Text>
                <Text style={ styles.textTemp }>{temp}°C</Text>
                <Text style={ styles.text }>Température minimum: {tempMin} °C</Text>
                <Text style={ styles.text }>Température maximum: {tempMax} °C </Text>
                <Text style={ styles.text }> Humidité: {humidity} %</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageDesign} source={{
                        uri: img,
                    }} />
                     <Text style={ styles.texticon }> {weatherDescription}</Text>
                </View>
        </View>
        </View>
    );

}

let styles;
styles = StyleSheet.create({
    container: {
        flex: 1.5,
        justifyContent: "start",
        flexDirection: "row",

    },
    weather: {
        backgroundColor: 'rgba(207, 226, 243, 0.2)',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        height: 400,
        flex: 1,
        justifyContent: "start",
        flexDirection: "column",
        alignItems: "center",

    },
    title: {
        fontSize: 30,
        fontWeight: '300',
    },
    textTemp: {
        fontSize: 70,
        fontWeight: '400',
        marginTop: 5,
        color: 'white',

    },
    text: {
        fontSize: 20,
        fontWeight: '200',
    },
    imageDesign: {
        height: 120,
        width: 120,
    },
    imageContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
    },
    texticon: {
        display: "block",
        fontSize: 15,
        fontWeight: '300',
    }
});

export default ShowMeteo;
