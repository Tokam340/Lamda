import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import colors from '../../assets/themes/colors'

const Input = ({placeholder, style}) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput placeholder={placeholder} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.input,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop: 30,
        paddingVertical: 5
    }
})
