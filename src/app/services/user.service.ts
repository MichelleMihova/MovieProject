import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import { BACKEND_URL } from "../config/config";

@Injectable()
export class UserService {
  allowedScreens = {};
  disallowedScreens = [];
  isLoggedIn: BehaviorSubject<any> = new BehaviorSubject(false);
  forceChangePass: BehaviorSubject<any> = new BehaviorSubject(this.getForceChangePass());

  constructor(private http: HttpClient, private router: Router) { }

  loginSso() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
    });

    return this.http.post(`${BACKEND_URL}/login-sso`, null, {
      headers,
      observe: 'response'
    });
  }

  login(data: {user: string, pass: string}): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
    });

    return this.http.post(`${BACKEND_URL}/login`, data, {
      headers,
      observe: 'response'
    });
  }

  logout(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'X-AUTH-TOKEN': this.getToken(),
      'Accept-Language': this.getLanguage()
    });

    return this.http.post(`${BACKEND_URL}/logout`, '', { headers }).pipe(
      map(res => {
        sessionStorage.clear();

        this.isLoggedIn.next(false);
        this.router.navigate(['/login']);

        return res;
      }, err => {
        return err;
      }),
      catchError(error => {
        sessionStorage.clear();

        this.isLoggedIn.next(false);
        this.router.navigate(['/login']);

        return throwError(error);
      })
    );
  }

  setToken(token): void {
    sessionStorage.setItem('imx.user.session', token);
  }

  getToken(): string {
    return sessionStorage.getItem('imx.user.session');
  }

  setHybridToken(language): void {
    const data = {
      WEB_FORMS_CONTEXT_NAME: 'ADMIN',
      WEB_IMX_LANGUAGE: language.imx,
      WEB_FORMS_LANGUAGE: language.forms
    };

    sessionStorage.setItem('v8', JSON.stringify(data));
  }

  getHybridToken() {
    return JSON.parse(sessionStorage.getItem('v8'));
  }

  setLanguage(language) {
    localStorage.setItem('language', language);
  }

  getLanguage(): string {
    return localStorage.getItem('language');
  }

  setForceChangePass({ forceChangePass }) {
    if (forceChangePass) {
      sessionStorage.setItem('imx.changepass', 'true');
      this.forceChangePass.next(true);
    } else {
      sessionStorage.removeItem('imx.changepass');
      this.forceChangePass.next(false);
    }
  }

  getForceChangePass() {
    return sessionStorage.getItem('imx.changepass');
  }

  getUserInfo(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'X-AUTH-TOKEN': this.getToken(),
      'Accept-Language': this.getLanguage()
    });

    return this.http.get(`${BACKEND_URL}/svc/userinfo`, { headers });
  }

  getAuthorizations(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'X-AUTH-TOKEN': this.getToken(),
      'Accept-Language': this.getLanguage()
    });

    return this.http.get(`${BACKEND_URL}/svc/userinfo/screens/authorizations`, { headers });
  }

  getButtons(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'X-AUTH-TOKEN': this.getToken(),
      'Accept-Language': this.getLanguage()
    });

    return this.http.get(`${BACKEND_URL}/svc/domains/TEL_BANDEAU`, { headers });
  }

  getSystemSetup(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'X-AUTH-TOKEN': this.getToken(),
      'Accept-Language': this.getLanguage()
    });

    return this.http.get(`${BACKEND_URL}/svc/setup/system`, { headers });
  }

  getFormats(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'X-AUTH-TOKEN': this.getToken(),
      'Accept-Language': this.getLanguage()
    });

    return this.http.get(`${BACKEND_URL}/svc/userprefs`, { headers });
  }

  getCurrency(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'X-AUTH-TOKEN': this.getToken(),
      'Accept-Language': this.getLanguage()
    });

    return this.http.get(`${BACKEND_URL}/svc/domains/DV_PRECISION`, { headers });
  }

  setAllowedScreens(authorizations: any, buttons: any): void {
    const authorizationsDictionary = {};
    authorizations.forEach(e_screen => {
      authorizationsDictionary[e_screen.authority] = e_screen;
    });
    buttons.forEach(e_screen => {
      if (
        authorizationsDictionary.hasOwnProperty(e_screen.ecran) &&
        authorizationsDictionary[e_screen.ecran].hasOwnProperty(
          'permissions'
        ) &&
        authorizationsDictionary[e_screen.ecran].permissions.r === true
      ) {
        if (e_screen.chemin == null) {
          this.allowedScreens[e_screen.ecran] = {
            href: e_screen.ecran,
            abrev: e_screen.dispalyAbrev,
            value: e_screen.displayValue
          };
        } else {
          this.allowedScreens[e_screen.ecran] = {
            href: e_screen.chemin,
            abrev: e_screen.dispalyAbrev,
            value: e_screen.displayValue
          };
        }
      } else if (
        authorizationsDictionary.hasOwnProperty(e_screen.ecran) &&
        authorizationsDictionary[e_screen.ecran].hasOwnProperty(
          'permissions'
        ) &&
        authorizationsDictionary[e_screen.ecran].permissions.r === false
      ) {
        this.disallowedScreens.push(e_screen.ecran);
      }
    });
    if (this.allowedScreens.hasOwnProperty('e_sainfo')) {
      const nameOfSender = 'e_sainfo.name_of_sender';
      this.allowedScreens['e_sainfo']['senderAccess'] =
        authorizationsDictionary['e_sainfo.name_of_sender'].permissions.u;
    }
  }
}
