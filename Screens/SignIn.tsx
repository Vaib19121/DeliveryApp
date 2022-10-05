import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import useAuthState from '../Hooks/AuthState';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import PasswordInput from '../Components/PasswordInput';

const SignIn: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  // const {token} = useSelector((state:any) => state.Token);
  // console.log("token",token);
  const {signInForm, postSignInForm, handleSignInForm} = useAuthState();

  const formSubmitHandler = async () => {
    try {
      const res = await postSignInForm();
      if (res.data.token) {
        dispatch({type: 'setToken', payload: res.data.token});
        console.log('token', res.data.token);
        navigation.navigate('Home');
      }
    } catch (err: any) {
      console.log('error--', err);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{height: 'auto'}}>
      <View style={styles.signInContainer}>
        <View style={styles.image}>
          <Image
            source={require('../assets/Login_Logo.png')}
            style={{alignSelf: 'center'}}
          />
        </View>
        <View>
          <CustomTextInput
            label="Email Id"
            bgcolor="white"
            visible={true}
            onChange={text => handleSignInForm('email', text)}
            value={signInForm.email.text}
            error={signInForm.email.error}
          />

          <PasswordInput
            lable="Email"
            placeholder="Password"
            bgcolor="white"
            onChange={e => handleSignInForm('password', e)}
            value={signInForm.password.text}
            error={signInForm.password.error}
          />
        </View>
        <View style={styles.forgotPassContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('Forgot Password')}><Text style={styles.forgotPassContainerText}>Forgot Password?</Text></TouchableOpacity>
        </View>
        <CustomButton
          name="SIGN UP"
          bgColor="#fa8832"
          width={wp('50%')}
          height={hp('6%')}
          fontColor="white"
          onPress={formSubmitHandler}
        />
        <View style={styles.signUpLinkContainer}>
          <Text style={styles.signUpText}>Don’t have an account ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: '#fffbf8',
  },
  footerLogin: {},
  error: {
    color: 'red',
    marginHorizontal: 50,
    fontWeight: '700',
    fontSize: 12,
    paddingTop: 22,
  },
  forgotPassContainer: {
    marginTop: 24,
    marginLeft: '62%',
  },
  forgotPassContainerText: {
    color: '#FA8832',
  },
  image: {
    marginTop: '20%',
  },
  signUpLinkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: '4%',
    paddingBottom: '2%',
  },
  signUpText: {fontSize: 14, fontWeight: '400'},
  signUpLink: {
    color: '#FA8832',
    fontSize: 14,
    fontWeight: '400',
  },
});
export default SignIn;
