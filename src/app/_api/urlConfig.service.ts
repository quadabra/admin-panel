import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class UrlConfigService {
  private apiUrl = {
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

  getAuthUrl(): string {
    return this.apiUrl.auth;
  }

  getManufacturerUrl(): string {
    return this.apiUrl.manufacturers;
  }

  getImageByHash(hash: string): Observable<any> {
    return this.http.get(this.apiUrl.image + hash + '?s=medium');
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
