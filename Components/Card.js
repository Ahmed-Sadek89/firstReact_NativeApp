// tools
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Card = (props) =>{
    return(
        <View style={styles.container}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 7,
        elevation: 3,
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: '#333',
        shadowOffset: {width: 1, height: 1},
        backgroundColor: '#fff',
        marginVertical:5,
        marginHorizontal: 5
    },
    cardContent: {
        marginVertical:15,
        marginHorizontal: 20,
    }
});

export default Card;
