import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import Heading from '../components/Heading';

export default class ToDoApp extends Component {


    onAdd(){
        console.log('Add was pressed!');
    }

    render(){
        return (
            <View>
                <Heading />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TextInput
                        placeholder='Enter your text here'
                        style={{
                            fontSize: 20,
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            padding: 10,
                            flex: 2
                        }}
                        numberOfLines={3}
                    />
                    <Button onPress={this.onAdd} title='Add todo' />
                </View>
            </View>
        );
    }
}