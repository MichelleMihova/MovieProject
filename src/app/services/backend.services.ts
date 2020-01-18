import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

import { BACKEND_URL } from "../config/config";

@Injectable()
export class BackendService {
  constructor(private userService: UserService, private http: HttpClient) { }

  defaultConfig(headers) {

    const defaultHeaders = {
      headers: {
        'X-AUTH-TOKEN': this.userService.getToken(),
        'Accept-Language': localStorage.getItem('language') || 'en',
      },
    };
    if (sessionStorage.getItem('txId')) {
      defaultHeaders.headers['txId'] = sessionStorage.getItem('txId');
    }
    if ( typeof(headers) === 'string') {
      defaultHeaders['responseType'] = 'blob';
    } else if (headers && Object.keys(headers).length > 0) {
      headers.forEach(header => {
        if (header !== 'observe') {
          defaultHeaders.headers[header] = headers.get(header);
        } else if (header === 'observe') {
          defaultHeaders[header] = 'response';
        }
      });
    }
    return defaultHeaders;
  }

  concat_url(url) {
    if (url.indexOf(BACKEND_URL) !== 0) {
      url = BACKEND_URL + url;
    }
    return url;
  }

  post<T>(url: string, data: any, config?: Object): Observable<T[]> {
    return this.http
      .post<T[]>(this.concat_url(url), this.trimData(data), this.defaultConfig(config)).pipe(
        map(
          res => {
            return res as T[];
          },
          err => {
            return err;
          }
        ));
  }

  put(url, data, config?) {
    return this.http
      .put(
        this.concat_url(url),
        this.trimData(data),
        // this.convertDatesToMilliseconds(data),
        this.defaultConfig(config)
      ).pipe(
        map(
          res => {
            return res as any;
          },
          err => {
            return err;
          }
        ));
  }

  patch(url, data, config?) {
    return this.http
      .patch(this.concat_url(url), this.trimData(data), this.defaultConfig(config)).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ));
  }

  get(url: string, config?: any, model?: any): Observable<any> {
    return this.http.get(
      this.concat_url(url),
      this.defaultConfig(config)).pipe(
        map(res => {
          const result = res as any[];
          return model ? this.preMap(model, result) : result;
        },
          err => {
            return err;
          }
        ));
  }

  delete(url, config?) {
    return this.http
      .delete(this.concat_url(url), this.defaultConfig(config)).pipe(
        map(
          res => {
            return res;
          },
          err => {
            return err;
          }
        ));
  }

  head(url, config?) {
    return this.http.head(this.concat_url(url), this.defaultConfig(config)).pipe(map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    ));
  }

  putHeaders(url, data) {
    const options = new HttpHeaders().set('observe', 'response');
    return this.http
    .put(
      this.concat_url(url),
      this.trimData(data),
      // this.convertDatesToMilliseconds(data),
      this.defaultConfig(options)
    ).pipe(
      map(
        res => {
          return res as any;
        },
        err => {
          return err;
        }
      ));
  }

  private trimData(data: any): any {
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'string' || data[key] instanceof String) {
        let temp = data[key].trim();
        if (temp.lastIndexOf('%') === temp.length - 1 && temp.length > 1) {
          while (temp.lastIndexOf('%') === temp.length - 1) {
            temp = temp.substring(0, temp.length - 1);
          }
          temp = temp.trim() + '%';
        }
        data[key] = temp;
      }
      if (data[key] !== null && typeof data[key] === 'object') {
        data[key] = this.trimData(data[key]);
      }
    });
    return data;
  }

  private preMap(model: any, collection: any[]): any[] {
    const keys = Object.keys(model);
    return Array.isArray(collection) ? collection.map(x => {
      const item = {};
      keys.forEach(key => item[key] = x[model[key]]);
      return item;
    }) : [];
  }
}
