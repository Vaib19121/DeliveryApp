import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import CustomDropdown from '../Components/CustomDropdown';
import CustomButton from '../Components/CustomButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import useAuthState from '../Hooks/AuthState';
import {signUpInfo} from '../constants/constant';

const signUpData: {[key: string]: {label: string; data: string[]}} = {
  firstName: {label: 'first name', data: []},
  middleName: {label: 'middle name', data: []},
  lastName: {label: 'last name', data: []},
  email: {label: 'email', data: []},
  password: {label: 'password', data: []},
  phoneNumber: {label: 'phone', data: []},
  gender: {label: 'gender', data: ['male', 'female', 'non-binary']},
  address: {label: 'address', data: []},
  city: {label: 'city', data: []},
  state: {label: 'state', data: ['state1', 'Lagos', 'state2']},
  zipcode: {label: 'zip code', data: []},
  hearAboutUs: {
    label: 'how did you hear about us',
    data: ['Facebook', 'Youtube'],
  },
};

const SignUp : React.FC<{navigation: any}>  = ({navigation}) => {
  const {handleSignUpForm, signUpForm, postSignUpForm} = useAuthState();

  const formSubmitHandler = async () => {
    try {
      const res = await postSignUpForm();
      console.log('response', res.data);
      Alert.alert('Success', 'You have successfully signed up');
    } catch (err) {
      console.log('err signup', err);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{height: 'auto',backgroundColor:'#fffbf8'}}>
      <Text style={{fontSize:18,marginHorizontal:'10%',marginTop:'5%'}}>PERSONAL INFORMATION</Text>

      {Object.keys(signUpData).map(mainKey => {
        const dropdown = ['hearAboutUs', 'gender'];
        const key = mainKey as keyof typeof signUpInfo;
        return signUpData[key].data.length === 0 ? (
          <CustomTextInput
            key={key}
            label={signUpData[key].label}
            bgcolor="white"
            value={signUpForm[key].text}
            error={signUpForm[key].error}
            onChange={val => handleSignUpForm(key, val)}
            visible={key !=='password'?true:false}
          />
        ) : (
          <CustomDropdown
            key={key}
            title={signUpData[key].label}
            itemlist={signUpData[key].data}
            onPress={item => handleSignUpForm(key, item)}
            buttonWidth={wp('80%')}
            placeholder="Select"
          />
        );
      })}

      <CustomButton
        name="SIGN UP"
        bgColor="#fa8832"
        width={wp('50%')}
        height={hp('6%')}
        fontColor="white"
        onPress={formSubmitHandler}
      />
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          marginBottom: '4%',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 15}}>Already have an account </Text>
        <TouchableOpacity
          onPress={() => {navigation.navigate('SignIn')}}>
          <Text style={{color: '#FA8832'}}>SignIn</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginHorizontal: wp('10%'),
    fontWeight: '700',
    fontSize: wp('2.5%'),
    paddingTop: hp('2%'),
  },
});
