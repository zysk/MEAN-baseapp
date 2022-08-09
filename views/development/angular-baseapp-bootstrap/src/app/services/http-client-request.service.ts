import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientRequestService {

  /**
   * This service can be used to call APIs using following functions.
   */

  constructor(
    public _httpClient: HttpClient
  ) { }

  getRequest(url: string, queryParams?: any) {
    return this._httpClient.get(this.constructFullAPI(url), { params: queryParams });
  }

  postRequest(url: string, params?: any, queryParams?: any) {
    return this._httpClient.post(this.constructFullAPI(url), params, { params: queryParams });
  }

  putRequest(url: string, params?: any, queryParams?: any) {
    return this._httpClient.put(this.constructFullAPI(url), params, { params: queryParams });
  }

  patchRequest(url: string, params?: any, queryParams?: any) {
    return this._httpClient.patch(this.constructFullAPI(url), params, { params: queryParams });
  }

  deleteRequest(url: string, params?: any) {
    return this._httpClient.delete(this.constructFullAPI(url), params);
  }

  constructFullAPI(url: any): string {
    return `/api/${url}`;
  }
}
