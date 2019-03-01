import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {ApiService} from '../../../../_api/api.service';
import {IBrand} from '../../../../_model/interface/brand';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class BrandsResolverService implements Resolve<IBrand> {

  constructor(private apiService: ApiService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBrand> {
    return this.apiService.getAllBrands().pipe(
      map(brands => {
        if (brands) {
          return brands;
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
