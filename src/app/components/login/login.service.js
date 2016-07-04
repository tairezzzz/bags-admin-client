export class LoginService {
  constructor($q, gapi) {
    'ngInject'

    // load auth2
    gapi.load('auth2');

    this.$q = $q;
    this.gapi = gapi;
    this.scopes = 'profile';
    this.clientId = '867651060370-4oqj1vdb06deotdvek82riivej3q4pmk.apps.googleusercontent.com';
  }

  login() {
    let auth2 = gapi.auth2.init({
      client_id: this.clientId,
      fetch_basic_profile: false,
      scope: 'profile'
    });

    return auth2.signIn().then((res) => {
      return res.getAuthResponse().id_token;
    });
  }
}
