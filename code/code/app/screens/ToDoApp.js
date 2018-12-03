import React, { Component } from 'react';
import { View, TextInput, Button, FlatList, Text, Switch } from 'react-native';
import Heading from '../components/Heading';

export default class ToDoApp extends Component {
    constructor(){
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    text: 'First Todo',
                    done: false
                },
                {
                    id: 2,
                    text: 'Second Todo',
                    done: false
                },
                {
                    id: 3,
                    text: 'Third Todo',
                    done: true
                }
            ]
        }
        this.onChangeDone = this.onChangeDone.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.cleanup = this.cleanup.bind(this);
    }

    onAdd(){
        console.log('Add was pressed!');
    }

    onChangeDone(id, newVal){
        console.log(id, newVal)
        let list = this.state.list
        list.map(val => {
            if(val.id === id){
                val.done = newVal
            }
        })
        console.log(list)
        this.setState({
            list: list
        })
    }

    renderItem(data){
        return (
            <View style={{
                padding: 30,
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    textDecorationLine: data.item.done ? 'line-through' : 'none'
                }}>
                    {data.item.text}
                </Text>
                <Switch 
                    onValueChange={(newVal) => this.onChangeDone(data.item.id, newVal)}
                    value={data.item.done}
                />
            </View>
        )
    }

    cleanup(){
        let list = this.state.list;
        list = list.filter(val => {
            return !val.done
        });
        this.setState({
            list: list
        })
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
                <View>
                    <FlatList 
                        data={this.state.list}
                        renderItem={this.renderItem}
                        extraData={this.state}
                        keyExtractor={(data) => {
                            return "" + data.id
                        }}
                    />
                </View>
                <View>
                    {this.state.list.length > 0 ? (
                        <Button 
                        title='Clean up' 
                        onPress={this.cleanup}
                    />
                    ) : null}
                </View>
            </View>
        );
    }
}