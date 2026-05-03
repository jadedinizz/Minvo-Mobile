import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, } from 'react-native';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/LOGOMINVO.png')} style={styles.logo} />

      <View style={styles.content}>
        <Text style={styles.title}>Faça login</Text>

        <TextInput
          style={styles.input}
          placeholder="example@mail.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
            <Text style={styles.rememberText}>Lembre de mim</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.registerRow}>
          <Text style={styles.registerText}>ou </Text>
          <TouchableOpacity>
            <Text style={styles.registerLink}>registre-se aqui</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>.</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Nossos </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>termos de uso</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>.</Text>
      </View>
    </SafeAreaView>
  );
}

const colors = {
  primary: '#4C667B',
  text_link:'#3884c2',
  placeholder: '#aaa',
  border: '#4C667B',
  background: '#D9D9D9',

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    marginTop: 90,
  },
  content: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.primary,
    marginBottom: 15,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 8,
    borderRadius: 2,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  rememberText: {
    color: colors.primary,
    fontSize: 14,
  },
  forgotText: {
    color: colors.text_link,
    fontSize: 14,
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    color: colors.primary,
    fontSize: 15,
  },
  registerLink: {
    color: colors.text_link,
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  footerText: {
    color: colors.primary,
    fontSize: 14,
  },
  footerLink: {
    color: colors.text_link,
    fontSize: 14,
  },
});