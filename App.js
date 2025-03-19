import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AuthProvider, useAuth } from './context/AuthContext';

// Component đăng nhập
const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  console.log(login);
  

  const handleLogin = () => {
    const userData = { username }; // Dữ liệu người dùng đăng nhập
    login(userData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

// Component hiển thị thông tin người dùng
const ProfileComponent = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Text style={styles.message}>Please log in</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Welcome, {user.username}!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

// Component chính của ứng dụng
const App = () => {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Auth Context Example</Text>
        <LoginComponent />
        <ProfileComponent />
      </View>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: '80%',
  },
  message: {
    fontSize: 18,
    marginBottom: 12,
  },
});

export default App;
