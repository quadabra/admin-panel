import {Injectable} from '@angular/core';
import {IProduct} from '../_model/interface/product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {IManufacturer} from '../_model/interface/manufacturer';
import {IBrand} from '../_model/interface/brand';

@Injectable()
export class ApiService {
  private _apiUrl = {
    menu: 'https://api.grey-shop.com/v1/menu',
    products: 'https://api.grey-shop.com/v1/product?category_id=',
    product: 'https://api.grey-shop.com/v1/product/',
    image: 'https://img.grey-line.com/g/',
    auth: 'https://auth.grey-shop.com/app/login',
    manufacturers: 'https://api.grey-shop.com/v1/manufacturer',
    brands: 'https://api.grey-shop.com/v1/brand'
  };

  constructor(private http: HttpClient) {
  }

  getAuthLink(): string {
    return this._apiUrl.auth;
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._apiUrl.products + '40');
  }

  getProduct(prod_id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this._apiUrl.product + prod_id);
  }

  getAllManufacturers(): Observable<IManufacturer[]> {
    return this.http.get<IManufacturer[]>(this._apiUrl.manufacturers);
  }

  getManufacturer(id: number): Observable<IManufacturer> {
    return this.http.get<IManufacturer>(this._apiUrl.manufacturers + '/' + id);
  }

  getAllBrands(): Observable<any> {
    return this.http.get<IBrand[]>(this._apiUrl.brands);
  }

  getImageByHash(hash: string): Observable<any> {
    return this.http.get(this._apiUrl.image + hash + '?s=medium');
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throwError(errorMessage);
  }
}
