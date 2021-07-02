import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Container from '../../components/Container';
import Btn from '../../components/Btn';
import colors from '../../assets/themes/colors';
import {SIGN_UP2} from '../../constants/routeName';
import HotspotContainer1 from '../../components/HotspotContainer1';
import Input from '../../components/Input';
import ValidationCondition from '../../components/ValidationCondition';
import Mission from '../../components/Mission';

const SignUp2 = ({navigation}) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return(
        <Container>

            <HotspotContainer1 
                style={styles.hotspotContainer}
            >

                <Image
                    source={{uri: 'https://miro.medium.com/max/1200/0*lf2XvQsiQG-HOz8D.jpg'}}
                    style={styles.image} 
                />

                <ScrollView showsHorizontalScrollIndicator>
                    <Input 
                        placeholder="Numéro de téléphone"
                    />

                    <ValidationCondition 
                        title="J’accepte de recevoir des publicités même en dehors de l’application LAMDA"
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        style={styles.validation}
                    />

                    <Mission 
                        description="Appuyer sur « VALIDER » pour vérifier votre
                            compte avec Account Kit par Facebook. Vous
                            n’avez pas besoin d’un compte Facebook pour
                            utiliser Account Kit. Un texto peut vous être
                            transmis pour vérifier votre numéro. Des frais de
                            supplémentaires peuvent être appliqués.
                            En savoir plus sur l’utilisation de vos données par Facebook."
                    />

                    <Btn 
                        title="VALIDER"
                        navigation={navigation}
                        routeName={SIGN_UP2}
                        style={styles.btn}
                        color={colors.primary1}
                    />
                </ScrollView>
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

    image: {
        width: 99,
        height: 99,
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
        borderRadius: 50,
        marginTop: 30,
        bottom: 0,
        backgroundColor: colors.primary1
    },

    validation: {
        marginVertical: 20
    }
});

export default SignUp2;