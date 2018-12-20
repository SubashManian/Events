import React, {Component} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime , saveEvent} from './api';
import {View, Button, TextInput, StyleSheet, AsyncStorage} from 'react-native';


const style= StyleSheet.create({
    fieldcontainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    text: {
        height: 40,
        margin: 0,
        paddingTop: 15,
        marginRight: 7,
        paddingLeft: 10
    },
    button: {
        height: 50,
        marginRight: 10,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        margin: 10,
        borderRadius:5  
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 2
    }
});


class Eventform extends Component{
    state={
        title: null,
        date: '',
    };
    
    isDateTimePickerVisible= true;

    handlechangetext = (value) =>{
        this.setState({title: value});
    }

    handleDatePicked = (date) =>{
        this.setState({ date });
        this._hideDateTimePicker();
    }

    _storedata =() =>{
        saveEvent(this.state.title,this.state.date)
            .then( this.props.navigation.navigate('Home'));
    }

    _showDateTimePicker = () => isDateTimePickerVisible = true ;

    _hideDateTimePicker = () => isDateTimePickerVisible = false ;

    render(){
        return(
            <View style={{flex: 1}}>

                <View style={style.fieldcontainer}>

                    <TextInput style={style.text}
                        placeholder="Event Title"
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handlechangetext}
                    />

                    <TextInput style={[style.text, style.borderTop]}
                        placeholder="Event Date"
                        spellCheck = {false}
                        value={formatDateTime(this.state.date.toString())}
                        editable={this.isDateTimePickerVisible}
                        onFocus={this._showDateTimePicker}
                    />

                    <DateTimePicker 
                        isVisible={this.isDateTimePickerVisible}
                        mode="datetime"
                        onConfirm= {this.handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />

                </View>

                <Button style={style.button} 
                    title="Add" 
                    onPress={this._storedata} 
                />

            </View>
        );
    }
}

export default Eventform;