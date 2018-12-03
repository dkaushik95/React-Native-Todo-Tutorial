import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class Heading extends Component {
    render(){
        return (
            <SafeAreaView style={{
                borderBottomColor: '#333',
                borderBottomWidth: 1
                }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    paddingTop: 30,
                    paddingLeft: 10,
                    paddingBottom: 10
                }}>
                    To-Do's
                </Text>
            </SafeAreaView>
        );
    }
}