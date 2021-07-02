import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/themes/colors';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HotspotContainer from '../../components/HotspotContainer';
import Hotspot from '../../components/Hotspot';

const Home = ({navigation}) => {
    return(
        <Container style={styles.container}>
            <Header 
                navigation={navigation}
            />
            <HotspotContainer style={styles.hContainer}>
                <Hotspot />
                <Hotspot />
                <Hotspot />
                <Hotspot />
                <Hotspot />
                <Hotspot />
            </HotspotContainer>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    hContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop: 20,
    }
});

export default Home;