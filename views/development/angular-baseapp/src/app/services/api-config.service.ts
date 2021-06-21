import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  /**
   * This service is used to list all the APIs
   * dedicated to this application.
   */

  API = {
    login: '/user/login',
    loggedInUser: '/user/logged-in-user',
    logout: '/user/logout'
  };
}
