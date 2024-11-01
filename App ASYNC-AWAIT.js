import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data); // Menyimpan data yang diterima di state
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      Alert.alert('Error', 'Gagal mengambil data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Data from Server:</Text>
      {error ? (
        <Text>Error loading data</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default App;