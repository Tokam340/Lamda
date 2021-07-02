import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/themes/colors';

const Btn = ({title, navigation, style, routeName, color}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <View style={[styles.container, style]}>
                <Text style={[styles.title, {color: color}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Btn

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        borderRadius: 50,
        paddingVertical: 20
    },

    title: {
        textAlign: 'center',
        fontSize: 15,
    }
})
