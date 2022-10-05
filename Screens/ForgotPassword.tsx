import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../Components/CustomTextInput';

const ForgotPassword = () => {
  const [data, setData] = React.useState({
    Email: {text:'', error:''}
  });

  const handleEmailChange = (val:any) => {
    setData({
      ...data,
      Email: {text:val, error:''}
    });
  };

  return (
    <View style={styles.container}>

      <ImageBackground
        style={{padding: 20, backgroundColor: '#fff', borderRadius: 10}}>
        <Image
          source={require('../assets/Forgot.jpg')}
          style={{
            height: 153,
            width: 158,
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        />
        <Text
          style={{
            color: '#FA8832',
            fontSize: 14,
            lineHeight: 16.8,
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'Syne',
            marginTop: 20,
          }}>
          Please enter your registered Email
        </Text>
      </ImageBackground>
      <View style={styles.footer}>
        <ScrollView>
          
            <CustomTextInput 
              value={data.Email.text}
              onChange={(val:any) => handleEmailChange(val)}
              error={data.Email.error}
              bgcolor="#fff"
              label='Email'
            />
         

          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => {}}>
              <LinearGradient
                colors={['#FA8832', '#FA8832']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  RESET
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Text style={styles.color_textPrivate}>
            We will email you a link to reset your password{' '}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 325,
    height: 472,
    borderRadius: 10,
    marginTop: 70,
    marginLeft: 35,
    marginRight: 40,
    marginBottom: 70,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 4,
    shadowOpacity: 1,
  },

  footer: {
    backgroundColor: '#fff',

    paddingHorizontal: 10,
    borderRadius: 10,
    marginLeft: 12,
    marginRight: 12,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    background: '#FFFBF8',
    borderColor: '#FA8832',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,

    borderRadius: 10,

    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 12.8,
    color: '#333333',
    paddingTop: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: ' #FA8832',
    borderRadius: 10,
    width: 180,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: ' #FA8832'
   },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  color_textPrivate: {
    color: '#828282',
    fontSize: 12,
    marginTop: 22,
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '400',

    lineHeight: 14,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
