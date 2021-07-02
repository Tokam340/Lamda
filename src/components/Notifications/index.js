import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/themes/colors'

const Notifications = ({title, date}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.grey
    },

    text: {
        width: '83%',
        fontSize: 12
    },

    date: {
        fontSize: 12
    }
})
