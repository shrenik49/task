/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {GlobalContext} from './Context';

const EditScreen = ({route, navigation}) => {
  const {data, setData} = useContext(GlobalContext);
  const {user} = route.params;

  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    const updatedData = data.map(item =>
      item.Id === editedUser.Id ? editedUser : item,
    );
    setData(updatedData);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit User</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={editedUser.FirstName}
          onChangeText={text => setEditedUser({...editedUser, FirstName: text})}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          value={editedUser.LastName}
          onChangeText={text => setEditedUser({...editedUser, LastName: text})}
          placeholder="Last Name"
        />
        {/* Repeat for other user fields */}
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default EditScreen;
