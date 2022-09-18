import React from 'react';
import {Image, Text, View} from "react-native";
import {useEffect} from "react";
import {useState} from "react";
import moment from 'moment';

function Datetime ({}) {
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(moment(new Date()).format('LT'));
        }, 1000);
        const dater = setInterval(() => {
            setDate(moment(new Date()).format('ll'));
        }, 1000);

        return () => {
            clearInterval(timer);
            clearInterval(dater);
        };
    }, []);
    return (
       <View>
           <View>
               <Text>
                   {date}
               </Text>
               <Text> {time}</Text>
           </View>
       </View>
    );
}

export default Datetime;
