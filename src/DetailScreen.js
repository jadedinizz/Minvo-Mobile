// Detail Screen 
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import ServiceList from '../components/service-list';

export default function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { empresa } = route.params || {};
  const servicesList = empresa?.services || [];

  const empresaData = empresa || {
    name: 'Studio Beauty',
    handle: '@studiobeauty',
    descricao:
      'Especialistas em beleza e bem-estar.',
    endereco: 'Rua Central, 120',
    imagemCapa: null,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO */}
        <View style={styles.heroContainer}>
          {empresaData.image?.uri ? (
            <Image
              source={{ uri: empresaData.image?.uri }}
              style={styles.heroImage}
            />
          ) : (
            <View style={styles.heroPlaceholder} />
          )}

          <View style={styles.overlay} />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>
              ←
            </Text>
          </TouchableOpacity>
        </View>

        {/* INFO */}
        <View style={styles.infoCard}>
          <Text style={styles.nome}>
            {empresaData.name}
          </Text>

          <Text style={styles.handle}>
            {empresaData.handle}
          </Text>

          <Text style={styles.descricao}>
            {empresaData.description}
          </Text>

          <View style={styles.addressBox}>
            <Text style={styles.addressTitle}>
              📍 Endereço
            </Text>

            <Text style={styles.addressText}>
              {empresaData.address}
            </Text>
          </View>
        </View>

        {/* SERVICES */}
        <ServiceList
          services={servicesList}
          onServicePress={(service) =>
            console.log(service)
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const colors = {
  primary: '#4C667B',
  background: '#fff',
  border: '#ECECEC',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  heroContainer: {
    height: 260,
    position: 'relative',
  },

  heroImage: {
    width: '100%',
    height: '100%',
  },

  heroPlaceholder: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: '700',
  },

  infoCard: {
    backgroundColor: '#fff',
    marginTop: -30,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 4,
  },

  nome: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.primary,
  },

  handle: {
    marginTop: 4,
    fontSize: 14,
    color: '#777',
  },

  descricao: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 24,
    color: '#444',
  },

  addressBox: {
    marginTop: 20,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#F7F9FB',
  },

  addressTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },

  addressText: {
    fontSize: 14,
    color: '#555',
  },

});