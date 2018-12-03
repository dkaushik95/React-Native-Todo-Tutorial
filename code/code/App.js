import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {
      blinking: false
    };

    setInterval(() => {
      this.setState({
        blinking: !this.state.blinking
      })
    }, 500);
  }

  render(){
    return (
      <View>
        <Text style={{
          color: this.state.blinking ? 'white' : 'black',
          backgroundColor: this.state.blinking ? 'black' : 'white',
          fontSize: 30
        }}>{this.props.children}</Text>
      </View>
    );
  }
}

export default class App extends Component {
	render() {
		return (
			<SafeAreaView>
        <Blink>Hello</Blink>
        <Blink>Hello</Blink>
        <Blink>Hello</Blink>
      </SafeAreaView>
		);
	}
}
