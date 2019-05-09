import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Message from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>WhatsApp</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Icon color={"white"} name="search" size={20}/>
                    <Message color={"white"} name="message" size={20}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#075E55",
        height: hp('8%'),
        width: wp('100%'),
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between',
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
});