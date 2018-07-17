import React from 'react';
import {StyleSheet,Text,View,Textinput} from 'react-native';

export default class Hello extends Component{
    render(){
        return(
            <View style={styles.container}>
           <Textinput style={styles.input}>
          </Textinput>
          

                </View>

        )
    };
}


const styles = StyleSheet.create({
    container: {
    
      
    },

    input:{

        height: 40,
        backgroundColor: '#3498db',


    },
  });