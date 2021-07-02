import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/themes/colors';
import Btn from '../../components/Btn';
import LinearGradient from 'react-native-linear-gradient';
import {LAMDA_MONEY, ACTUALITES} from '../../constants/routeName';

const Coins = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Coins</Text>

            <View style={styles.coins}>
                <LinearGradient 
                    colors={[colors.secondary2.first, colors.secondary2.second]} 
                    style={styles.linearGradient}
                >

                    <Text style={styles.number}>25</Text>

                </LinearGradient>
            </View>

            <Btn
                title='Convertir Avec Lamda Money'
                navigation={navigation}
                style={styles.btn}
                routeName={LAMDA_MONEY}
                color={colors.white}
            />

            <Text 
                style={styles.text}
                onPress={() => navigation.navigate(ACTUALITES)}
            >
                Gagner plus de coins ici
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 30
    },

    header: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.primary1,
        textTransform: 'uppercase',
        marginVertical: 20
    },

    text: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: colors.tertiary1,
        textDecorationLine: 'underline'
    },

    coins: {
        alignSelf: 'center',
        borderWidth: 8,
        borderRadius: 150,
        borderColor: colors.secondary1,
        marginVertical: 40
    },

    linearGradient: {
        paddingVertical: 45,
        paddingHorizontal: 55,
        borderRadius: 150
    },

    number: {
        fontSize: 99,
        fontWeight: 'bold',
        color: colors.white
    },

    btn: {
        backgroundColor: colors.tertiary1,
    }
});

export default Coins;