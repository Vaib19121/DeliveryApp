import {createSlice} from '@reduxjs/toolkit';
import {boothInfoType} from '../types/types';

const initialState: boothInfoType = {
  email: '',
  guarantorsInfo: {
    name: '',
    businessName: '',
    phoneNumber: '',
    address: '',
    state: '',
    city: '',
    zipcode: '',
    landmark: '',
    identityDocUrl: '',
  },
  boothEmergencyInfo: {
    name: '',
    age: '',
    relationship: '',
    phoneNumber: '',
    address: '',
    contactDocUrl: '',
  },
  boothBusinessInfo: {
    businessName: '',
    businessAddress: '',
    natureOfBusiness: '',
    nearestLandmark: '',
    cacDocUrl: '',
  },
  boothBankInfo: {
    accountName: '',
    accountNumber: '',
    bankName: '',
  },
};

export const signInDataslice = createSlice({
  name: 'signInDataSlice',
  initialState,
  reducers: {
    updateEmail(state: boothInfoType, action: {payload: {email: string}}) {
      state.email = action.payload.email;
    },
    updateGuarantorsInfo(
      state: boothInfoType,
      action: {payload: {guarantorsInfo: {[key: string]: string | number}}},
    ) {
      state.guarantorsInfo = action.payload.guarantorsInfo;
    },
    updateEmergencyInfo(
      state: boothInfoType,
      action: {payload: {emergencyInfo: {[key: string]: string | number}}},
    ) {
      state.boothEmergencyInfo = action.payload.emergencyInfo;
    },
    updateBankInfo(
      state: boothInfoType,
      action: {payload: {bankInfo: {[key: string]: string | number}}},
    ) {
      console.log('bankInfoData from slice', action.payload.bankInfo);
      state.boothBankInfo = action.payload.bankInfo;
    },
    updateBusinessInfo(
      state: boothInfoType,
      action: {payload: {businessInfo: {[key: string]: string | number}}},
    ) {
      state.boothBusinessInfo = action.payload.businessInfo;
    },
  },
});

export const signInDetailActions = signInDataslice.actions;
export default signInDataslice;
