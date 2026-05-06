// screens/DetailScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { empresa, servicos } = route.params || {};

  // Dados vindos da HomeScreen (podem ser undefined)
  const empresaData = empresa || {
    nome: 'Nome da Empresa',
    handle: '@handle',
    descricao: 'Descrição da empresa',
    endereco: 'Endereço completo',
    imagemCapa: null,
  };

  const servicosList = servicos || [
    { id: '1', nome: 'Nome do Serviço', valor: 0, duracao: '00 min', imagemFundo: null },
    { id: '2', nome: 'Nome do Serviço', valor: 0, duracao: '00 min', imagemFundo: null },
    { id: '3', nome: 'Nome do Serviço', valor: 0, duracao: '00 min', imagemFundo: null },
  ];

  const renderServico = ({ item }) => (
    <TouchableOpacity style={styles.servicoCard} activeOpacity={0.7}>
      <View style={styles.servicoImagemContainer}>
        {item.imagemFundo ? (
          <Image source={{ uri: item.imagemFundo }} style={styles.servicoImagem} />
        ) : (
          <View style={styles.servicoImagemPlaceholder}>
            <Text style={styles.placeholderText}>Foto de fundo</Text>
          </View>
        )}
      </View>
      <View style={styles.servicoInfo}>
        <Text style={styles.servicoNome}>{item.nome}</Text>
        <Text style={styles.servicoDetalhe}>
          R${item.valor.toFixed(2).replace('.', ',')} · {item.duracao}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes da Empresa</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Área da empresa */}
        <View style={styles.empresaContainer}>
          {empresaData.imagemCapa ? (
            <Image source={{ uri: empresaData.imagemCapa }} style={styles.capa} />
          ) : (
            <View style={styles.capaPlaceholder}>
              <Text style={styles.placeholderText}>Imagem da empresa</Text>
            </View>
          )}
          <View style={styles.empresaInfo}>
            <Text style={styles.empresaNome}>{empresaData.nome}</Text>
            <Text style={styles.empresaHandle}>{empresaData.handle}</Text>
            <Text style={styles.empresaDescricao}>{empresaData.descricao}</Text>
            <Text style={styles.empresaEndereco}>{empresaData.endereco}</Text>
          </View>
        </View>

        {/* Seção de serviços */}
        <View style={styles.servicosSection}>
          <Text style={styles.sectionTitle}>Serviços oferecidos</Text>
          <FlatList
            data={servicosList}
            renderItem={renderServico}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            contentContainerStyle={styles.servicosLista}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const colors = {
  primary: '#4C667B',
  text_link: '#3884c2',
  background: '#fff',
  cinzaClaro: '#f5f5f5',
  borda: '#e0e0e0',
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borda,
    backgroundColor: colors.background,
  },
  backButton: { paddingVertical: 8, paddingRight: 12 },
  backButtonText: { fontSize: 16, color: colors.text_link, fontWeight: '500' },
  headerTitle: { fontSize: 18, fontWeight: '600', color: colors.primary },
  empresaContainer: { backgroundColor: colors.background, marginBottom: 8 },
  capa: { width: '100%', height: 180, resizeMode: 'cover' },
  capaPlaceholder: {
    width: '100%',
    height: 180,
    backgroundColor: colors.cinzaClaro,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empresaInfo: { paddingHorizontal: 20, paddingVertical: 16 },
  empresaNome: { fontSize: 24, fontWeight: 'bold', color: colors.primary, marginBottom: 4 },
  empresaHandle: { fontSize: 14, color: '#666', marginBottom: 12 },
  empresaDescricao: { fontSize: 15, lineHeight: 22, color: '#444', marginBottom: 12 },
  empresaEndereco: { fontSize: 14, lineHeight: 20, color: '#555' },
  servicosSection: { backgroundColor: colors.background, paddingHorizontal: 20, paddingTop: 8, paddingBottom: 24 },
  sectionTitle: { fontSize: 20, fontWeight: '600', color: colors.primary, marginBottom: 16, marginTop: 8 },
  servicosLista: { paddingBottom: 20 },
  servicoCard: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.borda,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  servicoImagemContainer: { width: 100, height: 100, backgroundColor: colors.cinzaClaro },
  servicoImagem: { width: '100%', height: '100%', resizeMode: 'cover' },
  servicoImagemPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
  },
  placeholderText: { color: '#999', fontSize: 12 },
  servicoInfo: { flex: 1, paddingHorizontal: 12, paddingVertical: 12, justifyContent: 'center' },
  servicoNome: { fontSize: 16, fontWeight: '600', color: '#222', marginBottom: 6 },
  servicoDetalhe: { fontSize: 14, color: '#2c7a4d', fontWeight: '500' },
});