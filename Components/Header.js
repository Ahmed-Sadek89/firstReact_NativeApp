// tools
import React from 'react';
import { EvilIcons } from '@expo/vector-icons'; 
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = ({navigation, title}) =>{
    const pressHandler = () =>{
        navigation.toggleDrawer();
    }
    return(
        <View style={styles.container}>
            <EvilIcons style={styles.icon} name="navicon" size={38} color="black" onPress={pressHandler} /> 
            <View style={styles.content}>
                <Image source={require('../assets/images/heart_logo.png')} style={styles.image }/>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row-reverse',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        
    },
    icon:{
        position:'absolute',
        left: 0
    },
    image:{
        width:26,
        height: 26,
        marginLeft: 5
    },
    content:{
        flexDirection: 'row-reverse',
        justifyContent: 'center'
    },  
    title: {
        fontSize: 19,
        fontFamily: 'RobotoMono-Bold',
        textTransform:'capitalize'
    }
});

export default Header;