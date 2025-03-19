import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Error', 'Please enter both email and password.');
            return;
        }
        login(email); // Cập nhật trạng thái user
        navigation.replace('Explorer'); // Chuyển sang màn hình chính
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>

            <Text style={styles.label}>Email ID</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email here!"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password here!"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Reset password functionality here')}>
                <Text style={styles.forgotText}>For got password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or sign in with</Text>

            <View style={styles.socialButtons}>
                <TouchableOpacity style={styles.googleButton}>
                    <Image source={require('../assets/google.png')} style={styles.socialIcon} />
                    <Text style={styles.socialText}>Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.facebookButton}>
                    <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
                    <Text style={styles.socialText}>Facebook</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => Alert.alert('Sign Up', 'Navigate to sign-up screen')}>
                <Text style={styles.signUpText}>Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    forgotText: {
        textAlign: 'right',
        color: 'orange',
        marginTop: 10,
    },
    signInButton: {
        backgroundColor: '#FFA500',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signInText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        color: '#888',
        marginVertical: 15,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        width: 130,
        marginRight: 10,
        justifyContent: 'center',
    },
    facebookButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        borderRadius: 8,
        padding: 10,
        width: 130,
        justifyContent: 'center',
    },
    socialIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    socialText: {
        fontSize: 16,
        color: '#000',
    },
    signUpText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
    },
    signUpLink: {
        color: 'orange',
        fontWeight: 'bold',
    },
});

export default LoginScreen;
