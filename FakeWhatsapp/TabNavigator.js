import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import ListsChat from "./component/ListsChat";

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createMaterialTopTabNavigator({
    Home: ListsChat,
    Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);