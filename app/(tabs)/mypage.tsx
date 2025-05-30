import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const MyPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>熊谷 琉ニ</Text>
            <Text style={styles.bio}>おこ</Text>
            <Button title="Edit Profile" onPress={() => alert('Edit Profile')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bio: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
});

export default MyPage;