// tools
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// componets
import Card from '../Components/Card';
// styles
import { globelStyles} from '../Styles/Styles';
import {image} from '../Styles/Styles';

const ReviewDetails = ({route}) => {
    const selectedRating = route.params['rating'];
    return (
        <View style={globelStyles.container} >
            <Card>
                <Text style={styles.text} >
                    {route.params['body']}
                </Text>
                <Text style={styles.text} >
                    {route.params['title']}
                </Text>
                <View style={styles.rateContent}>
                    <Text style={styles.text} >
                        gameZone rating: 
                    </Text>
                    <Image source={image.rating[selectedRating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textTransform: 'capitalize',
        fontFamily: 'RobotoMono-Regular',
        marginBottom:5
    },  
    rateContent: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor:'#ddd',
        marginTop:10,
        paddingTop:10,
    },
});

export default ReviewDetails;