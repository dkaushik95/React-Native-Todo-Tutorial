import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

class Greeting extends Component {
	render() {
		return (
			<View>
        <Text>Welcome, {this.props.name}!</Text>
      </View>
		);
	}
}

export default class App extends Component {
	render() {
		return (
			<SafeAreaView>
        <Greeting name='Dishant' />
        <Greeting name='Lauren' />
      </SafeAreaView>
		);
	}
}
