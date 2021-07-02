import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/themes/colors';
import {data} from '../../assets/data/data';
import Pub from '../../components/Pub';

const Actualites = () => {
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Ionicons 
                    name="newspaper"
                    size={30}
                    color={colors.primary1}
                />

                <Text style={styles.title}>Actualites pub</Text>
            </View>

            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Pub item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary1,
        marginLeft: 20,
        textTransform: 'uppercase'
    }
});

export default Actualites;