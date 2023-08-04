/* eslint-disable prettier/prettier */
import {View, Text, TextInput, StyleSheet, Button, } from 'react-native';
import React, {useContext, useState} from 'react';
import RadioButton from './Radiobutton';
import {GlobalContext} from './Context';

export default function AddScreen() {
  const {data, setData} = useContext(GlobalContext);
  const [Id, setId] = useState<number | undefined>(undefined);
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [Status, setStatus] = useState('');
  const [Photo, setPhoto] = useState('');

  const data1 = {
    Id: Id,
    FirstName: FirstName,
    LastName: LastName,
    Dateofbirth: DOB,
    Status: Status,
    Photo: Photo,
  };

  const options = [
    {label: 'Single', value: 'Single'},
    {label: 'Married', value: 'Married'},
  ];

  const handleRadioSelect = (value: string) => {
    setStatus(value);
  };

  const handleSubmitData = () => {
    setData([...data, data1]); 
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>ID</Text>
        <TextInput
          placeholder="Enter ID"
          placeholderTextColor="#9F9F9F"
          style={styles.input}
          onChangeText={newText => setId(parseInt(newText))}
          keyboardType="numeric"
        />
        <Text style={styles.label}>First Name</Text>
        <TextInput
          placeholder="Enter first name"
          placeholderTextColor="#9F9F9F"
          style={styles.input}
          onChangeText={newText => setFirstName(newText)}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          placeholder="Enter last name"
          placeholderTextColor="#9F9F9F"
          style={styles.input}
          onChangeText={newText => setLastName(newText)}
        />
        <Text style={styles.label}>DOB</Text>
        <TextInput
          placeholder="Enter DOB in DD/MM/YYYY"
          placeholderTextColor="#9F9F9F"
          style={styles.input}
          onChangeText={newText => setDOB(newText)}
        />
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Select status:</Text>
          <RadioButton options={options} onSelect={handleRadioSelect} />
        </View>

        <Text style={styles.label}>Photo URL</Text>
        <TextInput
          placeholder="Enter image URL"
          placeholderTextColor="#9F9F9F"
          onChangeText={newText => setPhoto(newText)}
          style={styles.input}
        />
        <Button title="Add User" onPress={handleSubmitData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
});
