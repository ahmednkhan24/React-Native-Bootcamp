import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

type TextAndTextInputProps = {
  header: string;
  text: string;
  onTextChange: React.Dispatch<React.SetStateAction<string>>;
};

const TextAndTextInput: React.FC<TextAndTextInputProps> = ({
  header,
  text,
  onTextChange
}) => {
  return (
    <>
      <Text style={styles.label}>{header}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onTextChange}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1, // show border between the two text inputs
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default TextAndTextInput;
