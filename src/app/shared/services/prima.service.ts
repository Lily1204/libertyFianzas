import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_ENDPOINT_PROVIDER } from '../../providers/tokens';
import { PayloadPrima } from '../models/prima';

@Injectable({
  providedIn: 'root',
})
export class PrimaService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${this.endpoint}`;
  }

  getPrima(id) {
    const params = new HttpParams({
      fromObject: {
        id,
      },
    });
    return this.http.get<PayloadPrima>(`${this.url}/primas/primaCobrar`, {
      params,
    });
  }
}
