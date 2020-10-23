import React from 'react';
import {
    Text, View, Image, StyleSheet
} from 'react-native';

function Card({ name, img }) {
    return (
        <View style={styles.container}>
            {/* <Text >Um nome muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito grande</Text> */}
            <Text style={styles.title}>{name}</Text>
            <Image source={{ uri: img }}
                style={{ width: 80, height: 80 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
        margin: 10,
        backgroundColor: '#333',
        width: 100,
    },
    title: {
        textAlign: 'center',
        paddingBottom: 10,
        color: '#fff',
    }

});
export default Card;