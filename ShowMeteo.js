import React from 'react';
import { Text, TextInput, View, Image } from 'react-native';

function ShowMeteo({
   country,
   temp,
   tempMax,
   tempMin,
   weatherDescription,
   humidity,
   city,
   img
}) {

    return (
        <View>
            <Text>{country}</Text>
            <Text>{city}</Text>
            <Text>{temp}°C</Text>
            <Text>Température minimum: {tempMin} °C</Text>
            <Text>Température maximum: {tempMax} °C </Text>
            <Text>{humidity} %</Text>
            <Image   style={{ width: 100, height: 100 }}  source={{
                uri: img,
            }} />
        </View>

    );

}

export default ShowMeteo;
