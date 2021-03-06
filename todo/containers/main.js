import React, { Component } from 'react';
import { FlatList, TouchableHighlight, Text, View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { setTodo, addTodo } from '../store/actions/todoAction';

class Main extends Component {

    state = {
        todos: this.props.todos
    }

    componentDidMount() {
        this.setState({
            todos: this.props.todos
        })
    }

    render() {

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <TextInput
                        onChangeText={(text) => this.props.set(text)}
                        value={this.props.input}
                        style={{
                            borderColor: 'black',
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            width: 50,
                            height: 50
                        }}
                    />
                    <View>
                        <TouchableHighlight underlayColor='black'
                            style={{
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                alignItems: 'center',
                                backgroundColor: 'red',
                            }}
                            onPress={() => this.props.add(this.props.input)}
                        >
                            <Text style={{
                                color: 'white'
                            }}>Add</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{
                    flex: .5
                }}>
                    <FlatList
                        data={this.state.todos}
                        renderItem={({ item }) => {
                            return <Text>{item.key}</Text>
                        }}
                        extraData={this.state}
                        keyExtractor={(item, index) => item.key}
                    />
                </View>

            </View>
        )
    }
}

const mapStatetoProps = state => {
    return {
        input: state.todo.input,
        todos: state.todo.todos
    }
}

const dispatchStatetoprops = (dispatch) => {
    return {
        set: (input) => dispatch(setTodo(input)),
        add: (input) => dispatch(addTodo(input))
    }
}

export default connect(mapStatetoProps, dispatchStatetoprops)(Main);