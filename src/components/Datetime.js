import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
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
       <View style={styles.container}>
           <View>
               <Text style={styles.text}>
                   {date}
               </Text>
               <Text style={styles.text}> {time}</Text>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontWeight: '600',
        fontSize: 40,

    }
});

export default Datetime;
