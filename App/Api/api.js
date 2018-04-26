const key = '!@M*;-kATy_vcUkLq/U))QD`XL5Sg`5D';
const liClientId = '81td97f0ibm93v';
const liState = 'DCEeFWf45A53sdfKef424';
const liRedirectUri = 'https://www.example.com/auth/linkedin';

const api = {
  LoginUrl: `https://faazureapiinterfacedev.azurewebsites.net/api/fnMoblieLogin?code=${key}`,
  LinkedUrl: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${liClientId}&redirect_uri=${liRedirectUri}&state=${liState}&scope=r_basicprofile`,
  AuthId: 'JS#236734',
};

export default api;
