import React , {Component} from 'react';

import {
    Button
} from 'react-native';

export default class NavButton extends Component{
    render(){
        return (
            <Button 
            title = {this.props.title}
            onPress = {() => this.props.navigation.push(this.props.render)}
            />
        )
    }
}