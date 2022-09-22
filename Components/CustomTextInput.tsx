import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomTextInput: React.FC<{
  label: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string) => void;
  bgcolor: string;
  visible?: boolean;
  error: string;
}> = ({label, placeholder, onChange, bgcolor, visible, value, error}) => (
  <View style={styles.maincontainer}>
    {label ? (
      <Text
        style={{
          fontSize: wp('4%'),
          fontWeight: '600',
          fontFamily: 'Syne-Regular',
        }}>
        {label}
      </Text>
    ) : null}
    <View style={[styles.container, {backgroundColor: bgcolor}]}>
      <TextInput
        style={styles.textinputStyleLogin}
        placeholder={placeholder}
        secureTextEntry={!visible}
        onChangeText={onChange}
        value={`${value}`}
      />
    </View>
    {error?.trim().length > 0 && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp('1%'),
    width: '100%',
    alignSelf: 'center',
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FA8832',
  },
  maincontainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  textinputStyleLogin: {
    color: 'black',
    width: '80%',
    fontWeight: '400',
    paddingLeft: 18,
    paddingVertical: 2,
  },
  text: {
    fontSize: 23,
    color: '#ffe0bc',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    backgroundColor: '#ffe0bc',
    borderRadius: 10,
    flex: 1,
    paddingLeft: 40,
    opacity: 0.4,
  },
  error: {
    color: '#f10',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default CustomTextInput;
