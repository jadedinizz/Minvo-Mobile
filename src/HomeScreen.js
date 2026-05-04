import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/header';

export default function HomeScreen({ navigation, setIsLoggedIn }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header
                onMenuPress={() => console.log('Menu')}
                onProfilePress={() => setIsLoggedIn(false)} // usa como logout
            />

            <View style={styles.content}>
                <Text style={styles.welcome}>Bem-vindo!</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Detail')}
                >
                    <Text style={styles.buttonText}>Ir para Detalhes</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const colors = {
    primary: '#4C667B',
    text_link: '#3884c2',
    background: '#fff',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
    },
    logoutButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#ff4444',
        borderRadius: 6,
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    welcome: {
        fontSize: 20,
        color: colors.primary,
        marginBottom: 30,
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
