import {useState} from 'react';
import {
  bankFormInfo,
  businessFormInfo,
  emergencyContactFormInfo,
  guarantorInfo,
  signUpInfo,
  singInInfo,
} from '../constants/constant';
import {Auth} from '../requests/apiService';
import {useDispatch} from 'react-redux';
import {signInDetailActions} from '../store/reducers/signInDataSlice';

const useAuthState = () => {
  const dispatch = useDispatch();

  const [signInForm, setSignInForm] = useState({...singInInfo});
  const [signUpForm, setSignUpForm] = useState({...signUpInfo});
  const [guarantorForm, setGuarantorForm] = useState({...guarantorInfo});
  const [emergencyForm, setEmergencyForm] = useState({
    ...emergencyContactFormInfo,
  });
  const [businessForm, setBusinessForm] = useState({
    ...businessFormInfo,
  });
  const [bankInfoForm, setBankInfoForm] = useState({...bankFormInfo});

  const handleFormValidation = (name: string, value: string) => {
    let error = '';
    if (name === 'email') {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
        error = 'Invalid Email';
      }
    } else if (name === 'password') {
      if (value.trim().length < 5) {
        error = 'Minimum character limit is 5';
      } else if (value.trim().length > 20) {
        error = 'Maximum character limit is 20';
      }
    } else if (
      name === 'firstName' ||
      name === 'name' ||
      name === 'lastName' ||
      name === 'middleName'
    ) {
      if (value.trim().length < 2) {
        error = 'Minimum character limit is 2';
      }
    } else if (name === 'phoneNumber' || name === 'phone') {
      if (value.match(/[a-z]/gi)) {
        error = 'Must be a number';
      } else if (value.trim().length < 10 || value.trim().length > 12) {
        error = 'invalid number';
      }
    } else if (name === 'gender') {
      if (value.trim().length === 0) {
        error = 'Select your gender';
      }
    } else if (
      name === 'address' ||
      name === 'landmark' ||
      name === 'city' ||
      name === 'state' ||
      name === 'latitude' ||
      name === 'longitude'
    ) {
      if (value.trim().length === 0) {
        error = `Please Enter your ${name}`;
      }
    } else if (name === 'hearAboutUs') {
      if (value.trim().length === 0) {
        error = 'Please Enter how did you hear about';
      }
    } else if (name === 'zipcode') {
      if (value.match(/[a-z]/gi)) {
        error = 'Must be a number';
      } else if (value.trim().length === 0) {
        error = 'Please enter a zip code';
      }
    } else if (name === 'businessName') {
      if (value.trim().length === 0) {
        error = 'Please enter a Business name';
      }
    } else if (name === 'businessAddress') {
      if (value.trim().length === 0) {
        error = 'Please enter a Business address';
      }
    } else if (name === 'natureOfBusiness') {
      if (value.trim().length === 0) {
        error = 'Please enter a Nature of Business';
      }
    } else if (name === 'accountName') {
      if (value.trim().length === 0) {
        error = 'Please enter a Account name';
      }
    } else if (name === 'accountNumber') {
      if (value.trim().length === 0) {
        error = 'Please enter a Account number';
      }
    } else if (name === 'bankName') {
      if (value.trim().length === 0) {
        error = 'Please enter a Bank name';
      }
    }

    return error;
  };
  const formEmptyAndErrorValidation = (
    form: {
      text: string;
      error: string;
      type: string;
    },
    key: string,
  ) => {
    let error = '';
    if (form.text.trim().length === 0 && form.error.trim().length === 0) {
      error = `${key} should not be empty`;
    } else if (
      form.text.trim().length === 0 &&
      form.error.trim().length !== 0
    ) {
      error = form.error;
    } else if (
      form.text.trim().length !== 0 &&
      form.error.trim().length !== 0
    ) {
      error = `${key} is not valid`;
    }
    return error;
  };
  const formFinalValidation = (form: {
    [key: string]: {
      error: string;
      type: string;
      text: string;
    };
  }) => {
    let error = false;
    let formCopy = {...form};

    const optional = ['middleName'];
    for (const [mainKey, mainValue] of Object.entries(form)) {
      let err = '';
      if (!optional.includes(mainKey)) {
        err = formEmptyAndErrorValidation(mainValue, mainKey);
      }
      const key = mainKey as keyof typeof formCopy;

      formCopy[key].error = err;
      if (err) {
        error = true;
      }
    }
    return {formCopy, error};
  };

  const handleSignInForm = (name: keyof typeof signInForm, value: string) => {
    let formCopy = {...signInForm};

    formCopy[name].text = value;
    formCopy[name].error = handleFormValidation(name, value);

    setSignInForm(formCopy);
  };
  const handleSignUpForm = (name: keyof typeof signUpForm, value: string) => {
    let formCopy = {...signUpForm};

    formCopy[name].text = value;
    formCopy[name].error = handleFormValidation(name, value);
    setSignUpForm(formCopy);
  };
  const handleGuarantorForm = (
    name: keyof typeof guarantorForm,
    value: string,
  ) => {
    let formCopy = {...guarantorForm};

    formCopy[name].text = value;
    formCopy[name].error = handleFormValidation(name, value);
    setGuarantorForm(formCopy);
  };
  const handleEmergencyForm = (
    name: keyof typeof emergencyForm,
    value: string,
  ) => {
    let formCopy = {...emergencyForm};

    formCopy[name].text = value;
    formCopy[name].error = handleFormValidation(name, value);
    setEmergencyForm(formCopy);
  };
  const handleBusinessInfoForm = (
    name: keyof typeof businessForm,
    value: string,
  ) => {
    let formCopy = {...businessForm};

    formCopy[name].text = value;
    formCopy[name].error = handleFormValidation(name, value);
    setBusinessForm(formCopy);
  };
  const handleBankInfoForm = (
    name: keyof typeof bankInfoForm,
    value: string,
  ) => {
    let formCopy = {...bankInfoForm};

    formCopy[name].text = value;
    formCopy[name].error = handleFormValidation(name, value);
    setBankInfoForm(formCopy);
  };

  const extractSignInFormData = () => {
    let data: {[key: string]: string | number} = {};

    for (const [mainKey, mainValue] of Object.entries(signInForm)) {
      const key = mainKey as keyof typeof signInForm;
      data[key] = mainValue.text;
    }
    return data;
  };
  const extractSignUpFormData = () => {
    let data: any = {info: {}, address: {}};

    const infoProperties = [
      'firstName',
      'middleName',
      'lastName',
      'email',
      'password',
      'phoneNumber',
      'gender',
      'hearAboutUs',
    ];

    for (const [mainKey, mainValue] of Object.entries(signUpForm)) {
      if (infoProperties.includes(mainKey)) {
        data.info[mainKey] = mainValue.text;
      } else {
        if(mainKey === 'zipcode' || mainKey === 'latitude' || mainKey === 'longitude') {
          console.log(data.address[mainKey]);
          data.address[mainKey] = Number(mainValue.text);
        }
        else{
        data.address[mainKey] = mainValue.text;
        data.address.phoneNumber = '1234657890';
        data.address.name = 'addressName';
        }
      }
    }
    return data;
  };
  const extractGuarantorFormData = () => {
    const data: {[key: string]: string | number} = {};
    for (const [mainKey, mainValue] of Object.entries(guarantorForm)) {
      const key = mainKey as keyof typeof guarantorForm;
      data[key] = mainValue.text;
    }
    return data;
  };
  const extractEmergencyFormData = () => {
    const data: {[key: string]: string} = {};
    for (const [mainKey, mainValue] of Object.entries(emergencyForm)) {
      const key = mainKey as keyof typeof emergencyForm;
      data[key] = mainValue.text;
    }
    return data;
  };
  const extractBusinessInfoFormData = () => {
    const data: {[key: string]: string} = {};

    for (const [mainKey, mainValue] of Object.entries(businessForm)) {
      const key = mainKey as keyof typeof businessForm;
      data[key] = mainValue.text;
    }
    return data;
  };
  const extractBankInfoFormData = () => {
    const data: {[key: string]: string} = {};

    for (const [mainKey, mainValue] of Object.entries(bankInfoForm)) {
      const key = mainKey as keyof typeof bankInfoForm;
      data[key] = mainValue.text;
    }
    return data;
  };

  const postSignInForm = async () => {
    try {
      console.log('btn clicked');
      const {error, formCopy} = formFinalValidation(signInForm);
      const formCopyData = formCopy as typeof signInForm;

      if (error) {
        setSignInForm(formCopyData);
        throw new Error('Invalid or Incomplete Form Fields...');
      }

      const data = extractSignInFormData();

      console.log('data', data);
      const res = await Auth.signIn(data);
      if (res.status !== 201 ) {
        console.log(res.status);
        throw new Error(res);
      }
      console.log('response', res);
      return res;
    } catch (err: any) {
      throw new Error(err);
    }
  };
  const postSignUpForm = async () => {
    try {
      const {error, formCopy} = formFinalValidation(signUpForm);
      const formCopyData = formCopy as  typeof signUpForm;

      if (error) {
        setSignUpForm(formCopyData);
        throw new Error('Invalid or Incomplete Form Fields...');
      }


      const data = extractSignUpFormData();
      const {email} = data.info;
      
      dispatch(signInDetailActions.updateEmail({email: `${email}`}));
      console.log('extractedData->', data);

      const res = await Auth.signUp(data);
      if (res.status !== 201 ) {
        throw new Error(res);
      }
      return res;
    } catch (err: any) {
      throw new Error(err);
    }
  };
  const postGuarantorForm = async () => {
    const {error, formCopy} = formFinalValidation(guarantorForm);
    const formCopyData = formCopy as typeof guarantorForm;

    if (error) {
      setGuarantorForm(formCopyData);
      throw new Error('Invalid or Incomplete Form Fields...');
    }

    const data = extractGuarantorFormData();
    console.log('guarantorForm data', data);
    dispatch(signInDetailActions.updateGuarantorsInfo({guarantorsInfo: data}));
    try {
    } catch (err: any) {
      throw new Error(err);
    }
  };
  const postEmergencyForm = async () => {
    const {error, formCopy} = formFinalValidation(emergencyForm);
    const formCopyData = formCopy as typeof emergencyForm;

    if (error) {
      setEmergencyForm(formCopyData);
      throw new Error('Invalid or Incomplete Form Fields...');
    }

    const data = extractEmergencyFormData();
    console.log('emergencyForm data', data);

    dispatch(signInDetailActions.updateEmergencyInfo({emergencyInfo: data}));

    try {
    } catch (err: any) {
      throw new Error(err);
    }
  };
  const postBusinessInfoForm = async () => {
    const {error, formCopy} = formFinalValidation(businessForm);
    const formCopyData = formCopy as typeof businessForm;

    if (error) {
      setBusinessForm(formCopyData);
      throw new Error('Invalid or Incomplete Form Fields...');
    }

    const data = extractBusinessInfoFormData();
    console.log('businessForm data', data);

    dispatch(signInDetailActions.updateBusinessInfo({businessInfo: data}));

    try {
    } catch (err: any) {
      throw new Error(err);
    }
  };
  const postBankInfoForm = async () => {
    try {
      const {error, formCopy} = formFinalValidation(bankFormInfo);
      const formCopyData = formCopy as typeof bankFormInfo;

      if (error) {
        setBankInfoForm(formCopyData);
        throw new Error('Invalid or Incomplete Form Fields...');
      }

      const data = extractBankInfoFormData();
      console.log('auth state, bankData', data);
      return data;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  return {
    signInForm,
    signUpForm,
    guarantorForm,
    emergencyForm,
    businessForm,
    bankInfoForm,

    handleSignInForm,
    handleSignUpForm,
    handleGuarantorForm,
    handleEmergencyForm,
    handleBusinessInfoForm,
    handleBankInfoForm,

    postSignInForm,
    postSignUpForm,
    postGuarantorForm,
    postEmergencyForm,
    postBusinessInfoForm,
    postBankInfoForm,
  };
};

export default useAuthState;
