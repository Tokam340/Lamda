import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import Btn from '../../components/Btn';
import colors from '../../assets/themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import {SIGN_UP1} from '../../constants/routeName';

import Swiper from 'react-native-swiper';

const Start = ({navigation}) => {
    return(
        <Container style={styles.wrapper}>

            <Swiper
                dotStyle={styles.dot}
                activeDotStyle={styles.dot}
                activeDotColor={colors.tertiary1}
                dotColor={colors.white}
            >
                <View style={styles.slide1}>
                    <View style={styles.view1}>
                        
                    </View>
                </View>

                <View style={styles.slide1}>
                    <View style={styles.view1}>
                        
                    </View>
                </View>

                <View style={styles.slide1}>
                    <View style={styles.view1}>
                        
                    </View>
                </View>
            </Swiper>


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
        borderRadius: 50,
        marginBottom: 50,
        marginHorizontal: 30
    },

    wrapper: {
        flex: 1
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    view1: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        width: '70%',
        height: 200,
        marginTop: '50%',
        borderRadius: 50
    },

    dot: {
        width: 30,
        height: 5,
    },
});

export default Start;