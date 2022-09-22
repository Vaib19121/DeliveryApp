export type NavigationType = {navigation: any};

export type extractSignInFormType = {email: string; password: string};
export type extractSignUpFormType = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  sex: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  zipcode: string;
  hearAboutUs: string;
};
export type extractGuarantorFormType = {
  name: string;
  businessName: string;
  phone: string;
  address: string;
  document: string;
};
export type emergencyContactFormType = {
  name: string;
  businessName: string;
  relationship: string;
  phone: string;
  address: string;
  document: string;
};
export type businessInfoFormType = {
  businessName: string;
  businessAddress: string;
  natureOfBusiness: string;
  nearestLandmark: string;
  document: string;
};
export type bankInfoFormType = {
  accountName: string;
  accountNumber: string;
  bankName: string;
};
export type boothInfoType = {
  email: string;
  guarantorsInfo: {
    name: string;
    businessName: string;
    phoneNumber: string;
    address: string;
    state: string;
    city: string;
    zipcode: string;
    landmark: string;
    identityDocUrl: string;
  };
  boothEmergencyInfo: {
    name: string;
    age: string;
    relationship: string;
    phoneNumber: string;
    address: string;
    contactDocUrl: string;
  };
  boothBusinessInfo: {
    businessName: string;
    businessAddress: string;
    natureOfBusiness: string;
    nearestLandmark: string;
    cacDocUrl: string;
  };
  boothBankInfo: {
    accountName: string;
    accountNumber: string;
    bankName: string;
  };
};
