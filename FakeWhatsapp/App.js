import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Tab, TabHeading, Tabs} from 'native-base';
import Header from "./component/Header";
import ListsChat from "./component/ListsChat";


export default class App extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <Header/>
                    <Tabs>
                        <Tab heading={
                            <TabHeading style={{backgroundColor: "#075E55"}}>
                                <Text style={{color: 'white'}}>Chats</Text>
                            </TabHeading>
                        }>
                            <ListsChat/>
                        </Tab>
                        <Tab heading={
                            <TabHeading style={{backgroundColor: "#075E55"}}>
                                <Text style={{color: 'white'}}>Estados</Text>
                            </TabHeading>
                        }>
                            <Text>Estados</Text>
                        </Tab>
                        <Tab heading={
                            <TabHeading style={{backgroundColor: "#075E55"}}>
                                <Text style={{color: 'white'}}>Llamadas</Text>
                            </TabHeading>
                        }>
                            <Text>Llamadas</Text>
                        </Tab>
                    </Tabs>
                </ScrollView>
            </View>
        );
    }
}
