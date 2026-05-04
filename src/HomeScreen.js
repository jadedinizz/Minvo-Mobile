import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/header';
import Categories from '../components/categories';
import BusinessList from '../components/business-list';

export default function HomeScreen({ navigation, setIsLoggedIn }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header
                onMenuPress={() => console.log('Menu')}
                onProfilePress={() => setIsLoggedIn(false)} // usa como logout
            />

            <View style={styles.bannerContainer}>
                <Text style={styles.bannerText}>
                    Agende serviços na sua região com praticidade! Encontre os melhores profissionais do mercado perto de você.
                </Text>
            </View>

            <Categories />

            <BusinessList 
                onCardPress={(service) => navigation.navigate('Detail', { service })}
            />
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
    bannerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerText: {
        fontSize: 15,
        fontWeight: '400',
        color: colors.primary,
        textAlign: 'center',
        lineHeight: 24,
    },
});
