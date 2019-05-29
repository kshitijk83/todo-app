import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';


class Main extends Component {

    render(){
        return(
            <View>
                <Text>{this.props.input}</Text>
            </View>
        )
    }
}

const mapStatetoProps = state=>{
    return{
        input: state.todo.input
    }
}

export default connect(mapStatetoProps, null)(Main);