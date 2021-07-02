import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/themes/colors';

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Ionicons
                name="menu-outline"
                size={40}
                color={colors.white}
                onPress={() => navigation.openDrawer()}
            />
            <Text style={styles.title}>Lamda</Text>
            <Image
                source={{uri: 'https://miro.medium.com/max/1200/0*lf2XvQsiQG-HOz8D.jpg'}}
                style={styles.image} 
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },

    title: {
        color: colors.white,
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },

    image: {
        width: 40,
        height: 40,
        borderRadius: 50
    }

})

export default Header;
