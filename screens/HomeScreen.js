import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import {useEffect} from "react";
import {useState} from "react";
import ShowMeteo from "../ShowMeteo";
import Datetime from "../Datetime";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function HomeScreen() {
    const [latitude, setLatitude] = useState({});
    const [longitude, setLongitude] = useState({});
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const img = require('../assets/pexels-eberhard-grossgasteiger-2310713.jpg');
    let url = 'https://api.openweathermap.org/data/2.5/weather?';

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
                setLoading(false);
            }
        )();
    }, []);
//country temp humidity  temp_min temp_max
    //weather.description
    if (data && data.main && data.weather && data.sys) {
        let imgUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        return ( <View style = { styles.container } >
                <ImageBackground source={img} style = { styles.imagebackground } >
                    <Text style={ styles.title}>Météo</Text>
                    <Datetime/>
                    <StatusBar style = "auto" />
                    <ShowMeteo country={data.sys.country} temp={data.main && data.main.temp} tempMin={data.main && data.main.temp_min} tempMax={data.main && data.main.temp_max} humidity={data.main && data.main.humidity}
                               city={data && data.name} img={ imgUrl} weatherDescription={data.weather[0].description}/>
                </ImageBackground>
            </View>
        );
    } else{
        return (
            <View style = { styles.container } >
                <ImageBackground source={img} style = { styles.imagebackground } >
                    <Text style={ styles.title}>Météo</Text>
                    <Text style = { styles.loader }> Loading...</Text>
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
        fontSize: 20,
        textAlign: "center",
        marginTop: 100,
    },
    loader: {
        fontSize: 20,
        textAlign: "center",
    }
});
