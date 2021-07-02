import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import Btn from '../../components/Btn';
import colors from '../../assets/themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import {SIGN_UP1} from '../../constants/routeName';

const Start = ({navigation}) => {
    return(
        <Container>
            <LinearGradient 
                    colors={[colors.secondary2.first, colors.secondary2.second]} 
                    style={styles.linearGradient}
            >

                <Btn 
                    title="DEMARRER"
                    navigation={navigation}
                    routeName={SIGN_UP1}
                    color={colors.white}
                />

            </LinearGradient>
            
        </Container>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        borderRadius: 50
    },
});

export default Start;