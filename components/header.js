import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ onMenuPress, onProfilePress }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onMenuPress}>
                <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>

            <Image
                source={require('../assets/logo-white.png')}
                style={styles.logo}
            />

            <TouchableOpacity onPress={onProfilePress}>
                <Ionicons name="person" size={28} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#415565',
        paddingHorizontal: 20,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo: {
        width: 90,
        height: 30,
        resizeMode: 'contain',
    },
});