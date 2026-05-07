// Service Card - Card individual de servico

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

const colors = {
    primary: '#4C667B',
    border: '#ECECEC',
    text: '#222',
    lightText: '#777',
    green: '#2c7a4d',
};

export default function ServiceCard({ item, onPress }) {
    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => onPress?.(item)}
        >
            {item.image ? (
                <Image
                    source={item.image}
                    style={styles.image}
                />
            ) : (
                <View style={styles.placeholder}>
                    <Text style={styles.placeholderText}>
                        Serviço
                    </Text>
                </View>
            )}

            <View style={styles.info}>
                <Text style={styles.name}>
                    {item.name}
                </Text>

                <View style={styles.row}>
                    <Text style={styles.duration}>
                        {item.duration}
                    </Text>

                    <Text style={styles.price}>
                        R$ {item.price.toFixed(2).replace('.', ',')}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 18,
        overflow: 'hidden',
        marginBottom: 18,
        borderWidth: 1,
        borderColor: colors.border,
    },

    image: {
        width: '100%',
        height: 150,
    },

    placeholder: {
        width: '100%',
        height: 150,
        backgroundColor: '#E8ECEF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    placeholderText: {
        color: '#888',
    },

    info: {
        padding: 16,
    },

    name: {
        fontSize: 17,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 10,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    duration: {
        fontSize: 14,
        color: colors.lightText,
    },

    price: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.green,
    },
});