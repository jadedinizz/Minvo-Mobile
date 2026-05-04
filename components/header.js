import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Header({ onMenuPress, onProfilePress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress}>
        <Text style={styles.hamburger}>☰</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Minvo</Text>

      <TouchableOpacity onPress={onProfilePress}>
        <Text style={styles.profile}>👤</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#415565',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hamburger: {
    fontSize: 28,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profile: {
    fontSize: 24,
  },
});