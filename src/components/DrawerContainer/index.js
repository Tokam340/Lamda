import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/themes/colors';
import {MISSIONS, ACTUALITES, LAMDA_MONEY} from '../../constants/routeName';

const DrawerContainer = ({navigation}) => {
    return (
        <View>
            <View style={styles.header}>
                <Ionicons 
                    name="close"
                    size={30}
                    color={colors.white}
                    onPress={() => navigation.closeDrawer()}
                />

                <Text style={styles.username}>Elon Musk</Text>

                <View style={styles.image}>
                    
                    <Image 
                        source={{uri: 'https://miro.medium.com/max/1200/0*lf2XvQsiQG-HOz8D.jpg'}}
                        style={styles.user}
                    />
                </View>

            </View>

            <Text style={styles.phone}>+237 675124889</Text>

            <View style={styles.middle}>
                <TouchableOpacity style={styles.page} onPress={() => navigation.navigate(MISSIONS)}>
                    <Ionicons 
                        name="remove-circle"
                        size={15}
                        color={colors.tertiary1}
                    />
                    <Text style={{marginLeft: 10}}>Missions</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.page} onPress={() => navigation.navigate(ACTUALITES)}>
                    <Ionicons 
                        name="radio"
                        size={15}
                        color={colors.tertiary1}
                    />
                    <Text style={{marginLeft: 10}}>Fil d'actualités</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.page} onPress={() => navigation.navigate(LAMDA_MONEY)}>
                    <Ionicons 
                        name="server"
                        size={15}
                        color={colors.tertiary1}
                    />
                    <Text style={{marginLeft: 10}}>Lamda Money</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.page, {marginTop: '12%'}]}>
                    <Ionicons 
                        name="share-social"
                        size={15}
                        color={colors.black}
                    />
                    <Text style={{marginLeft: 10}}>Partager</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.contact}>Contactez-nous</Text>

            <TouchableOpacity style={[styles.page, {marginLeft: 10}]}>
                <Ionicons 
                    name="mail"
                    size={15}
                    color={colors.black}
                />
                <Text style={{marginLeft: 10}}>Par mail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.page, {marginLeft: 10}]}>
                <Ionicons 
                    name="call"
                    size={15}
                    color={colors.black}
                />
                <Text style={{marginLeft: 10}}>Par appel</Text>
            </TouchableOpacity>

        </View>
    )
}

export default DrawerContainer

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary2,
        padding: 10
    },

    user: {
        width: 100,
        height: 100,
        borderRadius: 100,
        
    },

    image: {
        width: 105,
        height: 105,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: colors.white,
        alignSelf: 'center',
        marginBottom: -50
    },

    username: {
        marginTop: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 12,
        textTransform: 'uppercase',
        color: colors.white,
        fontWeight: 'bold'
    },

    phone: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 20,
        color: colors.transparent
    },

    middle: {
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: colors.grey,
        marginTop: 20
    },

    page: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },

    contact: {
        padding: 10,
        fontSize: 15,
        color: colors.grey
    }
})
