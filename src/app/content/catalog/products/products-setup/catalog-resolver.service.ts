import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {IProduct} from '../../../../_model/interface/product';
import {ApiService} from '../../../../_api/api.service';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class CatalogResolverService implements Resolve<IProduct> {

  constructor(private apiService: ApiService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    return this.apiService.getProducts().pipe(
      map(productList => {
        if (productList) {
          return productList;
        }
        console.log(`products not found: ${''}`);
        this.router.navigate([null]);
        return null;
      }),
      catchError(error => {
        console.log(`retrieval error: ${error}`);
        this.router.navigate([null]);
        return of(null);
      })
    );
  }
}
