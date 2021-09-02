// tools 
import React from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
// styles
import {globelStyles} from '../Styles/Styles';


const reviewSchema = yup.object({
    title: yup.string().required().min(3),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('1-5', 'rating must be 1-5', (val) =>{
        return parseInt(val) < 6 && parseInt(val) > 0
    })
});

const FormDetails = ({addReview}) =>{
    return(
        <View style={globelStyles.container}>
            <Formik 
                initialValues={{ title: '', body: '', rating: '',}}
                validationSchema={reviewSchema}
                onSubmit={(values, action) =>{
                    addReview(values)
                    action.resetForm()
                }}
            >
                {
                    (props) => (
                    <View>
                        <TextInput
                            placeholder='enter title..'
                            style={styles.input}
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={styles.error} >{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline
                            placeholder='enter body..'
                            style={styles.input}
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={styles.error} >{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            keyboardType='numeric'
                            placeholder='enter rating(1-5)..'
                            style={{...styles.input}}
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={styles.error} >{props.touched.rating && props.errors.rating}</Text>
                        <Button title='submit' color='maroon' onPress={props.handleSubmit} />
                    </View>
                    )
                }
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor:'#ddd',
        padding:10,
        textAlign:'left',
        borderRadius:10,
        fontFamily: 'RobotoMono-Regular',
    },
    error:{
        color:'red',
        fontFamily: 'RobotoMono-Italic',
        fontSize:12,
        textAlign:'center',
        marginVertical:5,
    }
})

export default FormDetails