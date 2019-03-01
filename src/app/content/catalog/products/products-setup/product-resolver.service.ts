import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {IProduct} from '../../../../_model/interface/product';
import {ApiService} from '../../../../_api/api.service';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class ProductResolverService implements Resolve<IProduct> {

  constructor(private apiService: ApiService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    const id = +route.params['id'];
    return this.apiService.getProduct(+id).pipe(
      map(product => {
        if (product) {
          return product;
        }
        console.log(`product not found: ${id}`);
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
