import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  Button } from 'react-native';

export default class App extends Reacteact.Component {

  state = {
    value:0,
    total_taps:0 
  }

  incrementvalue =()=>{
    this.setstate({
      value: this.state.value + 1,
      total_taps: this.state.total_taps +1
    })
    console.log("Value:"+ (this.state.value+1))
  }

  decrementvalue =()=>{
    this.setstate({
      value: this.state.value - 1,
      total_taps: this.state.total_taps - 1
    })
    console.log("Value:"+ (this.state.value -1))
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 60, marginBottom: -20}}>0</Text>
        <Text style={{ fontSize: 12, padding: 20, color: 'grey'}}> Total taps</Text>
        <StatusBar style="auto" />
        <View style={{flextDirection: 'row'}} >
          <Button onPress= {this.decrementvalued} title= 'Decrease'/>
          <Text> </Text>
          <Button onPress= {this.incrementvalue} title= 'Increase'/>
          
        </View>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
