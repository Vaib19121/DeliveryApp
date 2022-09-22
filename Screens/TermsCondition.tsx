import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TandC from '../Components/TandC';
import CustomButton from '../Components/CustomButton';

const TermsCondition = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#fffbf8'}}>
        <ScrollView>
          <TandC
            TermsHeading="Welcome to NaWee app from NaWee Global Services Enterprise"
            TermsPara="('NaWee,” NaWee Services,' we,' 'us,' or 'our') is a platform (Hub) that connects you with Independent Carriers (each, an 'freelancers') who will move your Parcels (items) from one point to the other. These Terms of Service ('Terms') apply to your access and use of the mobile application (the 'App'), website ('Site') and other online and offline products and services (collectively, the 'NaWee Platform') of NaWee Global Services Enterprise"
          />
          <TandC
            TermsHeading="Your Choices Account Information"
            TermsPara="You may update, correct or delete information about you at any time by logging into your online account or emailing us at support@nawee.com. If you wish to delete or deactivate your account, please email us at support@nawee.com or delete our mobile application from your device, but note that we may retain certain information as required by law or for legitimate business purposes. We may also retain cached or archived copies of information about you for a certain period of time."
          />
          <TandC
            TermsHeading=" Location Information"
            TermsPara="Location Information When you first launch any of our mobile applications that collect location information, you will be asked to consent to the application's collection of this information. We currently require this location information in order to use our Services, so if you do not consent to this collection, you cannot use our Services. If you initially consent to our collection of location information, you can subsequently stop the collection of this information at any time by changing the preferences on your mobile device. If you do so, our mobile applications, or certain features thereof, will no longer function. You may also stop our collection of location information by following the standard uninstall process to remove all of our mobile applications from your device."
          />
          <TandC
            TermsHeading="Cookies and Settings"
            TermsPara="Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services. Promotional Communications You may opt out of receiving promotional mails, push notifications or text messages from NaWee by following the instructions in those communications or by adjusting the settings on your mobile device. If you opt out, we may still send you non-promotional communications, such as those about your account, products or services you've requested or our ongoing business relations."
          />
          <TandC
            TermsHeading="Terms and Conditions"
            TermsPara="Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim 
        id est laborum."
          />
          <TandC
            TermsHeading="Terms and Conditions"
            TermsPara="Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim 
        id est laborum."
          />
          <TandC
            TermsHeading="Accepting these Terms"
            TermsPara="BY DOWNLOADING THE APP OR OTHERWISE ACCESSING OR USING THE NAWEE PLATFORM, YOU AGREE TO BE BOUND BY ALL OF THE TERMS BELOW. Please read all of the terms before you use the NaWee Platform. If a term does not make sense to you, please let us know. If you don't agree to all of the terms below, you may not use the NaWee. Terms and Conditions for NaWee By accepting the following terms and conditions for “NaWee Services”; you (The Customer) are agreeing to all the following terms and conditions without exception. The terms of use stated herein (collectively, the “Terms of Use” or this “Agreement”) constitute a legal agreement between you (the Customer), Any individual/company (the Agent) and NaWee ( the “Company”). In order to use the service defined below, you must agree to the Terms of Use that are set out in the following. The company reserves the right to modify, vary and change the Terms of Use or its policies relating to the Service at any time as it deems fit."
          />
         
          <View style={{flexDirection: 'row', marginHorizontal: '5%'}}>
            <CustomButton
              bgColor="#fffbf8"
              fontColor="black"
              name="DECLINE"
              width={wp('6%')}
              height={hp('6%')}
              onPress={() => {}}
            />
            <CustomButton
              bgColor="#fa8832"
              fontColor="white"
              name="ACCEPT"
              width={wp('6%')}
              height={hp('6%')}
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default TermsCondition;
