import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import {useEffect} from "react";
import {useState} from "react";
import ShowMeteo from "./ShowMeteo";


export default function App() {
    const [latitude, setLatitude] = useState({});
    const [longitude, setLongitude] = useState({});
    const [data, setData] = useState({});
    const img = require('./assets/pexels-eberhard-grossgasteiger-2310713.jpg');
    let url = 'https://api.openweathermap.org/data/2.5/weather?';
    // console.log(url);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            // console.log('1 location', location);
            url += 'lat=' + location.coords.latitude + '&lon=' + location.coords.longitude  + '&appid=' + 'cb9f9f5777284842a8f5e0a78945b7ad' + '&units=metric'
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setData(data);
                });
        }
        )();
    }, []);
//country temp humidity  temp_min temp_max
    //weather.description

//console.log(data.sys.country);
    return ( <
        View style = { styles.container } >
            <Text>Météo</Text>
            <StatusBar style = "auto" />
            <ShowMeteo country={data && data.country} temp={data.main && data.main.temp} tempMin={data.main && data.main.temp_min} tempMax={data.main && data.main.temp_max} humidity={data.main && data.main.humidity}
            city={data && data.name} img={'https://openweathermap.org/img/wn/10d@2x.png'}/>
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
