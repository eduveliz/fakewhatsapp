import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import CardChat from "../component/CardChat";
import dataW from "../dataWhatApp";

export default class ListsChat extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <FlatList
                        data={dataW}
                        renderItem={chat =>
                            <CardChat
                                chat={chat}/>
                        }
                    />
                    <Text>...</Text>
                </ScrollView>
            </View>
        );
    }
}
