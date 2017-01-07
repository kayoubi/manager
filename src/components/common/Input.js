import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return(
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
      />
    </View>
  )
};

Input.propTypes = {
  label: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  secureTextEntry: React.PropTypes.bool,
  onChangeText: React.PropTypes.func
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input }