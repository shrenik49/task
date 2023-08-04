/* eslint-disable prettier/prettier */
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from './Context';

interface User {
  Id: number;
  FirstName: string;
  LastName: string;
  Dateofbirth: string;
  Status: string;
  Photo: string;
}

const MainScreen: React.FC = () => {
  const {data, setData} = useContext(GlobalContext);

  // const [data, setData] = useState<User[]>(Data);
  console.log('main screen data---->', data);
  useEffect(() => {}, []);
  const navigation = useNavigation();
  const deleteUser = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };
  const editUser = (user: User) => {
    // Navigate to the EditScreen with the selected user's data
    navigation.navigate('EditScreen', {user});
  };

  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.userContainer}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.label}>{'ID:'}</Text>
            <Text style={styles.value}>{item.Id}</Text>
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.label}>{'First Name:'}</Text>
            <Text style={styles.value}>{item.FirstName}</Text>
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.label}>{'Last Name:'}</Text>
            <Text style={styles.value}>{item.LastName}</Text>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.label}>{'BOX'}</Text>
            <Text style={styles.value}>{item.Dateofbirth}</Text>
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.label}>{'Status'}</Text>
            <Text style={styles.value}>{item.Status}</Text>
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.label}>{'Photo'}</Text>
            <Text style={styles.value}>{item.Photo}</Text>
          </View>
          <View style={styles.button}>
            <Button title="Edit User" onPress={() => editUser(item)} />
            <Button
              style={{padding: 5}}
              title="Delete User"
              onPress={() => {
                deleteUser(index);
              }}
            />
          </View>
        </View>
      ))}

      <View style={styles.addButtonContainer}>
        <Button
          title="Add User"
          onPress={() => {
            navigation.navigate('SecondScreen');
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ccc',
  },
  userContainer: {
    paddingLeft:30,
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft:20,
  },
  value: {
    flex: 2,
    fontSize: 16,
    color: '#333',
    paddingLeft:30,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  addButtonContainer:{
  }
});

export default MainScreen;
