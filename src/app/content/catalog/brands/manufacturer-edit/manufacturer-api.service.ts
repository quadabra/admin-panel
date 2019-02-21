import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {IManufacturer} from '../../../../_model/interface/manufacturer';
import {baseUrl, versionUrl} from '../../../../_api/url';

@Injectable()
export class ManufacturerApiService {
  private url = baseUrl + versionUrl + 'manufacturer';

  constructor(private http: HttpClient) {
  }

  getManufacturer(id: number): Observable<IManufacturer> {
    if (id === 0) {
      return of(this.initNewManufacturer());
    }
    return this.http.get<IManufacturer>(this.url + '/' + id);
  }

  createManufacturer(manufacturer: IManufacturer): Observable<IManufacturer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post<IManufacturer>(this.url, manufacturer.toString(), {headers: headers});
  }

  updateManufacturer(manufacturer: IManufacturer): Observable<IManufacturer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.put<IManufacturer>(this.url + '/' + manufacturer.entry , manufacturer.toString(), {headers: headers});
  }

  private initNewManufacturer(): IManufacturer {
    return {} as IManufacturer;
  }
}

