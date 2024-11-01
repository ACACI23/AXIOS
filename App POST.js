import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1);

  const handlePost = () => {
    const newPost = {
      title,
      body,
      userId,
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then((response) => {
        console.log('Data berhasil ditambahkan:', response.data);
        Alert.alert('Success', 'Data berhasil ditambahkan');
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        Alert.alert('Error', 'Gagal menambahkan data');
      });
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Create a New Post</Text>
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
      <Button title="Submit Post" onPress={handlePost} />
    </View>
  );
};

export default App;