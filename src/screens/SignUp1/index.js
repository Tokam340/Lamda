import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import Btn from '../../components/Btn';
import colors from '../../assets/themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import {SIGN_UP2} from '../../constants/routeName';
import HotspotContainer1 from '../../components/HotspotContainer1';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import Picker from '../../components/Picker';

const SignUp1 = ({navigation}) => {

    const [selectedLanguage1, setSelectedLanguage1] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState();

    return(
        <Container>

            <HotspotContainer1 
                style={styles.hotspotContainer}
            >

                <LinearGradient 
                    colors={[colors.secondary2.first, colors.secondary2.second]} 
                    style={styles.linearGradient}
                >

                    <Ionicons 
                        name="camera"
                        size={40}
                        color={colors.white}
                    />

                </LinearGradient>

                <Input 
                    placeholder="Nom"
                />

                <Input 
                    placeholder="Adresse email"
                />

                <View style={styles.pickerContainer}>
                    <Picker 
                        title="Tranche d'âge"
                        style={styles.picker}
                        selectedValue={selectedLanguage1}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage1(itemValue)
                        }
                        label="18 - 25"
                    />

                    <Picker 
                        title="Sexe"
                        style={styles.picker}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                        label="Masculin"
                    />
                </View>

                <Btn 
                    title="SUIVANT"
                    navigation={navigation}
                    routeName={SIGN_UP2}
                    style={styles.btn}
                    color={colors.primary1}
                />
            </HotspotContainer1>
        </Container>
    )
}

const styles = StyleSheet.create({
    hotspotContainer: {
        marginTop: '40%',
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 20
    },

    linearGradient: {
        paddingVertical: 23,
        paddingHorizontal: 25,
        borderRadius: 150,
        alignSelf: 'center',
        marginTop: -40,
        position: 'absolute'
    },

    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },

    picker: {
        width: '50%'
    },

    btn: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: colors.primary1,
        marginTop: 30,
        bottom: 0
    }
});

export default SignUp1;