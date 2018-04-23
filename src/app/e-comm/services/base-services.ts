/**
 * @license
 * Copyright Yokogawa Electric Corporation. All Rights Reserved.
 *
 * @yokogawa-iiot/isobar: Isobar Module Definition
 */

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod } from '@angular/http'

@Injectable()
export class BaseServices {
  constructor(private http: Http) { }

  public get(_url: any) {
    return this.http.get(_url);
  }

  public post(_url: any, body: any) {
    return this.http.post(_url, body);
  }

  public put(_url: any, body: any) {
    return this.http.put(_url, body);
  }

  public delete(_url: any, token) {
    return this.http.delete(_url);
  }
}
