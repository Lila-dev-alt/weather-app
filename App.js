import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import {useEffect} from "react";
import {useState} from "react";
import ShowMeteo from "./ShowMeteo";


export default function App() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [data, setData] = useState({});
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
        })();

    }, []);

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude  + '&appid=' + 'cb9f9f5777284842a8f5e0a78945b7ad' + '&units=metric';
     fetch(url).then(response => {
        return response.json();
     }).then(data => {
         console.log(data);
         return setData(data);
    });
//country temp humidity  temp_min temp_max
    //weather.description

    return ( <
        View style = { styles.container } >
        <Text>Météo</Text>
            <StatusBar style = "auto" />

         <ShowMeteo country={data.country} temp={data.temp} tempMin={data.temp_min} tempMax={data.tempMax} humidity={data.humidity}
      city={data.name}/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
