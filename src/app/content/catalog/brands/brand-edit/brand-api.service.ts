import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IBrand} from '../../../../_model/interface/brand';
import {IBrandMultiLang} from '../../../../_model/interface/brandMultiLang';

@Injectable()
export class BrandApiService {
  private url = 'https://api.grey-shop.com/v1/brand';

  constructor(private http: HttpClient) {
  }

  toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

  getBrand(id: number): Observable<IBrandMultiLang> {
    if (id === 0) {
      return of(this.initNewBrand());
    }
    return this.http.get<IBrandMultiLang>(this.url + '/' + id + '?multi_lang=1');
  }

  createBrand(brand: IBrand): Observable<IBrand> {
    // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<IBrand>(this.url, brand, {});
    // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // return this.http.post<IBrand>('http://localhost:3000/brands', brand, {headers: headers});
  }

  updateBrand(brand: IBrand): Observable<IBrand> {
    // const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.put<IBrand>(this.url + '/' + brand.id,
      brand, {});
  }

  deleteBrand(id): Observable<any> {
    // const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.delete(this.url + '/' + id, {});
  }

  private initNewBrand(): IBrandMultiLang {
    return {
      id: null,
      logo: '',
      name: {
        EN: '',
        RU: '',
      },
      description: {
        EN: '',
        RU: '',
      },
      priority: '',
      priority_power: '',
      manufacturer_entry: null,
      seo_keyword: '',
    };
  }
}
