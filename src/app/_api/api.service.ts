import {Injectable} from '@angular/core';
import {IProduct} from '../_model/interface/product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private _apiUrl = {
    menu: 'http://api.grey-shop.com/v1/menu',
    products: 'http://api.grey-shop.com/v1/product?category_id=',
    product: 'http://api.grey-shop.com/v1/product/',
    image: 'http://img.grey-line.com/g/',
    auth: 'https://auth.grey-shop.com/app/login'
  };

  constructor(private _http: HttpClient) {
  }

  getAuthLink(): string {
    return this._apiUrl.auth;
  }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._apiUrl.products + '40');
  }

  getProduct(prod_id: number): Observable<IProduct> {
    return this._http.get<IProduct>(this._apiUrl.product + prod_id);
  }

  getImageByHash(hash: string): Observable<any> {
    return this._http.get(this._apiUrl.image + hash + '?s=medium');
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
