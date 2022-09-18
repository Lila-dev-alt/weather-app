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
            <Image   style={{ width: 40, height: 40 }}  source={{
                uri: img,
            }} />
        </View>

    );

}

export default ShowMeteo;
