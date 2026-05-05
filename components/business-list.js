import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BusinessCard from './business-card';

export default function BusinessList({ onCardPress }) {
    const business = [
        {
            id: 1,
            name: 'Clínica da Saúde',
            schedule: '08:00 - 18:00',
            image: { uri: 'https://picsum.photos/600/400?5' },
        },
        {
            id: 2,
            name: 'Studio de Pilates',
            schedule: '06:00 - 21:00',
            image: { uri: 'https://picsum.photos/600/400?6' },
        },
        {
            id: 3,
            name: 'Spa Relax',
            schedule: '09:00 - 20:00',
            image: { uri: 'https://picsum.photos/600/400?7' },
        },
        {
            id: 4,
            name: 'Academia Fit',
            schedule: '05:30 - 23:00',
            image: { uri: 'https://picsum.photos/600/400?3' },
        },
        {
            id: 5,
            name: 'Consultório Odonto',
            schedule: '08:00 - 17:00',
            image: { uri: 'https://picsum.photos/600/400?2' },
        },
    ];

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
        >
            {business.map((service) => (
                <BusinessCard
                    key={service.id}
                    name={service.name}
                    schedule={service.schedule}
                    image={service.image}
                    onPress={() => onCardPress && onCardPress(service)}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop: 10,
        paddingBottom: 20,
    },
});
