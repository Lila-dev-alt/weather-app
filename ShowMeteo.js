import React from 'react';
import { Text, TextInput, View } from 'react-native';

function ShowMeteo(props) {


    const {
        country,
        temp,
        tempMax,
        tempMin,
        weatherDescription,
        humidity,
        city
    } = props;


    return (
        <View>
            <Text>{country}</Text>
            <Text>{city}</Text>
            <Text>{temp}</Text>
            <Text>{tempMin}</Text>
            <Text>{tempMax}</Text>
            <Text>{humidity}</Text>
            <Text>{weatherDescription}</Text>
        </View>

    );

}

export default ShowMeteo;
