import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [postId, setPostId] = useState('1'); // Default ID 1
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleUpdate = () => {
    const updatedPost = {
      title,
      body,
    };

    axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost)
      .then((response) => {
        console.log('Data berhasil diperbarui:', response.data);
        Alert.alert('Success', 'Data berhasil diperbarui');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        Alert.alert('Error', 'Gagal memperbarui data');
      });
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Update Post</Text>
      <TextInput
        placeholder="Post ID"
        value={postId}
        onChangeText={setPostId}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Update Post" onPress={handleUpdate} />
    </View>
  );
};

export default App;