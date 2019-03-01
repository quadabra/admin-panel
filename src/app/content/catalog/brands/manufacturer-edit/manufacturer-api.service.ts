import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IManufacturer} from '../../../../_model/interface/manufacturer';

@Injectable()
export class ManufacturerApiService {
  private url = 'https://api.grey-shop.com/v1/manufacturer';

  constructor(private http: HttpClient) {
  }

  toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

  getManufacturer(id: number): Observable<IManufacturer> {
    if (id === 0) {
      return of(this.initNewManufacturer());
    }
    return this.http.get<IManufacturer>(this.url + '/' + id);
  }

  createManufacturer(manufacturer: IManufacturer): Observable<IManufacturer> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post<IManufacturer>(this.url, this.toUrlEncoded(manufacturer), {headers: headers});
  }

  updateManufacturer(manufacturer: IManufacturer): Observable<IManufacturer> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.put<IManufacturer>(this.url + '/' + manufacturer.entry,
      this.toUrlEncoded(manufacturer), {headers: headers});
  }

  deleteManufacturer(id): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.delete(this.url + '/' + id, {headers: headers});
  }

  private initNewManufacturer(): IManufacturer {
    return {} as IManufacturer;
  }
}

