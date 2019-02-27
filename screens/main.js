import React, {Component} from 'react';

import {
    View, 
    TextInput,
    StyleSheet,
    Button,
    Text
} from 'react-native';

import Output from '../components/Output';


export default class Main extends Component {
static navigationOptions = {
    title: 'Home',
};

constructor (props) {
    super(props);
        this.state = {
            value : 'Stranger'
        }
    }


render() {

return (
        <View style = {styles.container}>
        <TextInput
        style = {styles.textInput}
        placeholder = 'What is your name?'
        onChangeText = {(value) => this.setState({value})}
        />
        <Output 
        value = {this.state.value}
        />
        <Button 
        title = 'Details'
        onPress = {()=>{
            this.props.navigation.navigate('Details')
        }}
/>
        </View>
)
}
}

styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
 
})
