

import React from 'react';

import {
    StackNavigator,
} from 'react-navigation';

import HelloWorld from './HelloWorld';

const App = StackNavigator({
    Main: { screen: HelloWorld },
    Profile: { screen: HelloWorld },
});

export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
} 