import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SafeAreaView }  from 'react-navigation';
import { Actions } from 'react-native-router-flux';

import MainLogo from '_assets/images/Login/Logo.js';
import PageArt from '_assets/images/Login/PageArt.js';

const styles = StyleSheet.create({
    loginBackground: {
        flex: 1,
        backgroundColor: "#5C48E0",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%'
    },
    logoStyle: {
        flex:2,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "center"
    },
    pageArtStyle: {
        flex: 4,
        alignItems: "flex-end"
    },
    buttons: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5C48E0",
    },
    buttonStyle: {
        marginBottom: 10,
        backgroundColor: "#B2DFFC",
        height: 50,
        width: 300,
        borderRadius:10,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        textAlign:"center"
    }
});

const LoginScreen =({navigation})=> {
    const goToHomePage = ()=>{
        Actions.homePage();
    }
    return(
        <SafeAreaView style={styles.loginBackground}>
            <View style={styles.pageArtStyle}>
                <PageArt/>
            </View>
            <View style={styles.logoStyle}>
                <MainLogo/>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() =>goToHomePage()}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default LoginScreen;
