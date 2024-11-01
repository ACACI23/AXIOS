import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [postId, setPostId] = useState(''); // Menyimpan ID post yang akan dihapus

  const handleDelete = () => {
    if (!postId) {
      Alert.alert('Error', 'Masukkan ID yang valid untuk dihapus');
      return;
    }

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(() => {
        console.log('Data berhasil dihapus');
        Alert.alert('Success', 'Data berhasil dihapus');
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
        Alert.alert('Error', 'Gagal menghapus data');
      });
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Delete Post</Text>
      <TextInput
        placeholder="Post ID"
        value={postId}
        onChangeText={setPostId}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Delete Post" onPress={handleDelete} />
    </View>
  );
};

export default App;