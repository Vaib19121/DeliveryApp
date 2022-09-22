const basicInputTemplate = {text: '', error: '', type: 'text'};

export const singInInfo = {
  email: {...basicInputTemplate},
  password: {...basicInputTemplate},
};

export const signUpInfo = {
  firstName: {...basicInputTemplate},
  middleName: {...basicInputTemplate},
  lastName: {...basicInputTemplate},
  email: {...basicInputTemplate},
  password: {...basicInputTemplate},
  phoneNumber: {...basicInputTemplate},
  gender: {...basicInputTemplate},
  address: {...basicInputTemplate},
  landmark: {...basicInputTemplate,text: 'near hospital'},
  city: {...basicInputTemplate},
  state: {...basicInputTemplate, text: 'Maharashtra'},
  zipcode: {...basicInputTemplate},
  hearAboutUs: {...basicInputTemplate},
  latitude: {...basicInputTemplate, text: '6.5244'},
  longitude: {...basicInputTemplate, text: '3.3792'},
};

export const guarantorInfo = {
  name: {...basicInputTemplate},
  businessName: {...basicInputTemplate},
  phoneNumber: {...basicInputTemplate},
  address: {...basicInputTemplate},
  identityDocUrl: {...basicInputTemplate, text: 'testfile'},
};

export const emergencyContactFormInfo = {
  name: {...basicInputTemplate},
  // businessName: {...basicInputTemplate},
  relationship: {...basicInputTemplate},
  phoneNumber: {...basicInputTemplate},
  address: {...basicInputTemplate},
  contactDocUrl: {...basicInputTemplate, text: 'testfile'},
};

export const businessFormInfo = {
  businessName: {...basicInputTemplate},
  businessAddress: {...basicInputTemplate},
  natureOfBusiness: {...basicInputTemplate},
  nearestLandmark: {...basicInputTemplate},
  cacDocUrl: {...basicInputTemplate, text: 'testfile'},
};

export const bankFormInfo = {
  accountName: {...basicInputTemplate},
  accountNumber: {...basicInputTemplate},
  bankName: {...basicInputTemplate},
};
