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
    if (data && data.main && data.weather && data.sys) {
        let imgUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        console.log(imgUrl);
        return ( <View style = { styles.container } >
                    <ImageBackground source={img} style = { styles.imagebackground } >
                        <Text style={ styles.title}>Météo</Text>
                        <StatusBar style = "auto" />
                        <ShowMeteo country={data.sys.country} temp={data.main && data.main.temp} tempMin={data.main && data.main.temp_min} tempMax={data.main && data.main.temp_max} humidity={data.main && data.main.humidity}
                         city={data && data.name} img={ imgUrl} weatherDescription={data.weather[0].description}/>
                    </ImageBackground>
                </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagebackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    title: {
        fontSize: 50,
        textAlign: "center",
        marginTop: 100,
    }
});
