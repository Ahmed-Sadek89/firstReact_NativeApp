// tools
import React, {useState} from 'react';
import {View, Text, TouchableOpacity,FlatList, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
// components 
import Card from '../Components/Card';
// styles
import { globelStyles} from '../Styles/Styles';
// screens
import FormDetails from './FormDetails'

const Home = ({ navigation}) => {
    const [visible, setVisible] = useState(false)
    const [review, setReview] = useState([
        { title: 'ahmed sadek', rating: 5, body: 'Zelda, Breath of Fresh Air', key: '1' },
        { title: 'mohammed hany', rating: 4, body: 'Gotta Catch Them All (again)', key: '2' },
        { title: 'abdo abd_Elrady', rating: 3, body: ' Not So "Final" Fantasy', key: '3' },
    ])
    const addReview = (values) =>{
        values.key = Math.random();
        setReview((current) =>{
            return [
                values, ...current
            ]
        })
        setVisible(false)
    }
    return (
        <View style={globelStyles.container } >

            <Modal visible={visible} animationType='slide' >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View>
                        <Ionicons style={{...styles.add, ...styles.remove}} name="close" size={24} color="black" onPress={() => setVisible(false)}/>
                        <FormDetails addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Ionicons style={styles.add} name="add" size={24} color="black" onPress={() => setVisible(true)}/>
            
            <FlatList 
                data={review}
                renderItem={ ({item}) => (
                    <TouchableOpacity onPress={() => navigation.push('ReviewDetails', item)}>
                        <Card>
                            <Text style={{textTransform: 'capitalize', fontFamily: 'RobotoMono-Regular'}}>
                                {item.title}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    add:{
        alignSelf: 'center',
        borderWidth:1,
        borderColor: 'gray',
        padding: 10,
        backgroundColor: "#fff",
        marginBottom:10,
        borderRadius:10,
        color: '#333',
    },
    remove: {
        marginVertical:30,
    }
})

export default Home;