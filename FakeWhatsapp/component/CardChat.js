import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

export default class CardChat extends Component {
    render() {
        return (
            <View style={{
                flex: 1, flexDirection: "row",
                width: "100%",
                padding: 3,
            }}>
                <View style={{
                    width: "13%",
                    height: 60,
                    padding: 7,
                    marginRight: 10,
                    paddingBottom: 20
                }}>
                    <Image source={{uri: this.props.chat.item.picture}}
                           style={{width: 48, height: 48, borderRadius: 25}}/>
                </View>
                <View style={{
                    width: "70%",
                    height: 60,
                    padding: 7,
                    paddingBottom: 20,
                    borderBottomColor: '#999999',
                    borderBottomWidth: 0.5,
                }}>
                    <Text style={{fontWeight: "bold", color: "black"}}>{this.props.chat.item.name}</Text>
                    <Text>{this.props.chat.item.lastChat}</Text>
                </View>
                <View style={{
                    width: "17%",
                    height: 60,
                    padding: 7,
                    paddingBottom: 20,
                    borderBottomColor: '#999999',
                    borderBottomWidth: 0.5,
                }}>
                    <Text style={{fontSize: 10}}>{this.props.chat.item.latest_timestamp}</Text>
                    {!this.props.chat.item.leido && <View>
                        <Text style={{
                            fontSize: 10,
                            textAlign: "center",
                            padding: 3,
                            backgroundColor: "#20C65A",
                            color: "white",
                            width: 20,
                            height: 20,
                            borderRadius: 10
                        }}>
                            1
                        </Text>
                    </View>}
                </View>
            </View>
        );
    }
}

