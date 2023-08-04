/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Option {
  label: string;
  value: string;
}

interface RadioButtonProps {
  options: Option[];
  onSelect: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({options, onSelect}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <View>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          onPress={() => handleSelect(option.value)}
          style={styles.radioButton}>
          <View
            style={[
              styles.radioButtonOuter,
              {
                borderColor: selectedValue === option.value ? 'blue' : 'gray',
              },
            ]}>
            {selectedValue === option.value && (
              <View style={styles.radioButtonInner} />
            )}
          </View>
          <Text style={styles.radioButtonLabel}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  radioButtonOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'blue',
  },
  radioButtonLabel: {
    marginLeft: 10,
  },
});

export default RadioButton;
