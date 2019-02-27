import React, { Component } from 'react';

import {
    View, 
    Text,
    Button
} from 'react-native';


export default class DetailsScreen extends Component {

static navigationOptions = ({navigation, navigationOptions}) => {
    const { params } = navigation.state;

    return {
        title: params ? params.otherParam : 'Details',
        headerStyle : {
            backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor
    }
}

render(){
        
return (            
<View style = {{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
}}>
            
<Text>Details Screen</Text>


<Button
    title = 'Update'
    onPress = {()=>{
        this.props.navigation.setParams({otherParam: 'Updated!'})
    }}
/>


<Button
    title = 'Go back'
    onPress = {()=>{
        this.props.navigation.goBack()
    }}
/>

<Button
    title = 'Go to details...again'
    onPress = {()=>{
        this.props.navigation.push('Details')
    }}
/>
            
<Button
    title = 'Home'
    onPress = {()=>{
        this.props.navigation.navigate('Home')
    }}
/>


</View>
        
)}
}