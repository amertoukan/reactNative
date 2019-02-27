import React, {Component} from 'react';

import  {
    Text
} from 'react-native';

export default class Output extends Component {
    render() {
        return (
            <Text 
            style = {styles.text}
            >
            Hello {this.props.value}!
            </Text>
        )
    }
}