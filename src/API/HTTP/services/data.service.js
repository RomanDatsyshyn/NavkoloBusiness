import http from '../http-common';
import {getToken} from '../../../asyncStorage/token';

class DataService {
  login = async data => {
    try {
      return http.post('/auth/serviceSeller', data);
    } catch (e) {
      console.log(e);
    }
  };

  contactUs = async data => {
    try {
      return http.post('/contactUs', data);
    } catch (e) {
      console.log(e);
    }
  };

  sendCode = async data => {
    try {
      return http.post('/serviceSeller/send-code', data);
    } catch (e) {
      console.log(e);
    }
  };

  logout = async () => {
    try {
      let token = await getToken();

      return http.post(
        '/auth/serviceSeller/logout',
        {},
        {
          headers: {
            Authorization: token,
          },
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  register = async data => {
    try {
      return http.post('/serviceSeller', data);
    } catch (e) {
      console.log(e);
    }
  };

  addPromo = async data => {
    try {
      return http.post('/serviceSeller/addPromo', data);
    } catch (e) {
      console.log(e);
    }
  };

  changePassword = async data => {
    try {
      return http.put('/serviceSeller/change-password', data);
    } catch (e) {
      console.log(e);
    }
  };

  updatePassword = async data => {
    try {
      let token = await getToken();

      return http.put('/serviceSeller/updatePassword', data, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  updateTypeOfActivity = async data => {
    try {
      let token = await getToken();

      return http.put('/serviceSeller/updateTypeOfActivity', data, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  updateMyContacts = async data => {
    try {
      let token = await getToken();

      return http.put('/serviceSeller/updateMyContacts', data, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  updatePhone = async data => {
    try {
      let token = await getToken();

      return http.put('/serviceSeller/updatePhone', data, {
        headers: {
          Authorization: token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  getUserData = async () => {
    try {
      let token = await getToken();

      return http.get('/serviceSeller', {
        headers: {
          Authorization: token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export default new DataService();
