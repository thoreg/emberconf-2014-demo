import { __fixtures__, defineFixture, lookupFixture, raw, request } from 'ic-ajax';

var ajax = {
   __fixtures__: __fixtures__,
   defineFixture: defineFixture,
   lookupFixture: lookupFixture,
   raw: raw,
   request: request
};

ajax.defineFixture('/session', {
  response: {
    /* Successfully identified username and password. */
    isIdentified: true,

    /* Related to one-time-passcode. */
    willSetupOTP: false,
    isAuthenticated: false,

    hasElectronicConsent: true,
    hasTermsOfServiceConsent: false,
    showTour: false
  },
  textStatus: 'success'
});

ajax.defineFixture('/one-time-password-methods', {
  response: [
    { id: 1, type: 'phone', value: '5555555555' },
    { id: 2, type: 'email', value: 'example@example.com' }
  ],
  // response: [
  //  { id: 1, type: 'phone', value: '5555555555' }
  // ],
  // response: [],
  textStatus: 'success'
});

ajax.defineFixture('/one-time-password-authenticate', {
  response: {
    isAuthenticated: true
  },
  textStatus: 'success'
});

export default ajax;
