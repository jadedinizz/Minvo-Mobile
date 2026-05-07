// Business Card - Cards individual de Empresa

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function BusinessCard({ name, schedule, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.name} numberOfLines={2}>{name}</Text>
            <Text style={styles.schedule}>Funcionamento: {schedule}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: '#f0f0f0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    padding: 12,
  },
  content: {
    gap: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  schedule: {
    fontSize: 13,
    color: '#e0e0e0',
  },
});
