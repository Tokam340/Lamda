import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/themes/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Counter from '../../components/Counter';
import Notification from '../../components/Notifications';

const Notifications = () => {
    return(
        <View style={styles.container}>
            <Text style={[styles.title, {textAlign: 'center', marginTop: 15}]}>LAMDA</Text>

            <View style={[styles.notification, {padding: 20}]}>
                <View style={styles.notification}>
                    <Ionicons 
                        name="notifications-outline" 
                        size={25} 
                        color={colors.primary1} 

                    />

                    <Text style={[styles.title, {marginLeft: 10}]}>NOTIFICATIONS</Text>

                </View>

                <Counter 
                    style={styles.counter}
                    number={1}
                    txtStyle={styles.txtCount}
                />
            </View>

            <Notification
                title='Votre demande de conversion a été approuvée Profitez d’encore plus de data en regardant nos pub dans le fil d’actualité.'
                date='Jeu. 21'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    title: {
        fontSize: 20,
        color: colors.primary1,
        fontWeight: 'bold'
    },

    notification: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    counter: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
});

export default Notifications;