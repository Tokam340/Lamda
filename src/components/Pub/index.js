import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from '../../assets/themes/colors';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Pub = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.annonce}>
                <View style={styles.annonce}>
                    <Image 
                        source={{uri: item.annonceur}} 
                        style={styles.annonceImage}
                    />
                    <Text>Annonceur</Text>
                </View>
                <Text>{item.time}</Text>
            </View>

            <View>
                <Image 
                    source={{uri: item.image}}
                    style={styles.image}
                />

                <View style={styles.action}>
                    <Ionicons 
                        name="heart"
                        size={15}
                        color={colors.white}
                    />

                    <Ionicons 
                        name="document-text"
                        size={15}
                        color={colors.white}
                    />

                    <Ionicons 
                        name="share-social"
                        size={15}
                        color={colors.white}
                    />
                </View>
            </View>
        </View>
    )
}

export default Pub

const styles = StyleSheet.create({

    container: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderTopWidth: 1,
        borderColor: colors.grey
    },

    annonce: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    annonceImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10
    },

    image: {
        width: '100%',
        height: 150,
        borderRadius: 20,
        marginTop: 10
    },
    
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        backgroundColor: colors.transparent,
        bottom: 10,
        width: 100,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        alignSelf: 'flex-end',
    }
})
