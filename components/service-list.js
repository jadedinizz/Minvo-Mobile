// Service List - Lista de Cards de servico
 
import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ServiceCard from './service-card';

const colors = {
  primary: '#4C667B',
};

export default function ServiceList({
  services,
  onServicePress,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Serviços disponíveis
      </Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <ServiceCard
            item={item}
            onPress={onServicePress}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 18,
  },
});