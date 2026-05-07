// Business List - Lista de Cards de Empresas

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BusinessCard from './business-card';
import { images } from '../assets/mock/images';

export default function BusinessList({ onCardPress }) {
    const business = [
        {
            id: 1,
            name: 'Studio Beauty',
            handle: '@studiobeauty',

            description:
                'O mais novo estúdio de beleza localizado no centro da cidade. Conceito, sofisticação e um ambiente totalmente agradável.',

            address: 'Rua Central, 120',
            schedule: '06:00 - 21:00',

            image: {
                uri: images.beauty,
            },

            services: [
                {
                    id: '1',
                    name: 'Corte Feminino',
                    price: 80,
                    duration: '45 min',

                    image: {
                        uri: 'https://picsum.photos/500/300?5',
                    },
                },

                {
                    id: '2',
                    name: 'Escova Modelada',
                    price: 60,
                    duration: '30 min',

                    image: {
                        uri: 'https://picsum.photos/500/300?6',
                    },
                },
            ],
        },

        {
            id: 2,
            name: 'Spa Relax',
            handle: '@sparelax',

            description:
                'Massagens, relaxamento corporal e experiências premium de bem-estar.',

            address: 'Av. Beira Mar, 220',
            schedule: '09:00 - 20:00',

            image: {
                uri: images.spa,
            },

            services: [
                {
                    id: '1',
                    name: 'Massagem Relaxante',
                    price: 120,
                    duration: '60 min',

                    image: {
                        uri: 'https://picsum.photos/500/300?7',
                    },
                },

                {
                    id: '2',
                    name: 'Spa Facial',
                    price: 90,
                    duration: '40 min',

                    image: {
                        uri: 'https://picsum.photos/500/300?8',
                    },
                },
            ],
        },

        {
            id: 3,
            name: 'Clínica Sorriso',
            handle: '@clinicasorriso',

            description:
                'Atendimento odontológico moderno com conforto e tecnologia.',

            address: 'Rua das Flores, 88',
            schedule: '08:00 - 17:00',

            image: {
                uri: images.sorriso,
            },

            services: [
                {
                    id: '1',
                    name: 'Limpeza Dental',
                    price: 150,
                    duration: '50 min',

                    image: {
                        uri: 'https://picsum.photos/500/300?9',
                    },
                },

                {
                    id: '2',
                    name: 'Clareamento',
                    price: 300,
                    duration: '90 min',

                    image: {
                        uri: 'https://picsum.photos/500/300?10',
                    },
                },
            ],
        },

        {
            id: 4,
            name: 'Academia Faustino',
            handle: '@academiafaustino',

            description:
                'Treinos personalizados, musculação e acompanhamento profissional.',

            address: 'Av. Principal, 500',
            schedule: '05:30 - 23:00',

            image: {
                uri: images.academia,
            },

            services: [
                {
                    id: '1',
                    name: 'Personal Trainer',
                    price: 90,
                    duration: '60 min',

                    image: {
                        uri: 'https://picsum.photos/500/300?11',
                    },
                },

                {
                    id: '2',
                    name: 'Avaliação Física',
                    price: 50,
                    duration: '30 min',

                    image: {
                        uri: 'https://picsum.photos/500/300?12',
                    },
                },
            ],
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
