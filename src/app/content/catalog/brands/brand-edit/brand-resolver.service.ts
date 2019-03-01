import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {BrandApiService} from './brand-api.service';
import {IBrand} from '../../../../_model/interface/brand';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class BrandResolverService implements Resolve<IBrand> {
  constructor(private api: BrandApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBrand> {
    const id = route.paramMap.get('id');
    return this.api.getBrand(+id).pipe(
      map(brand => {
        if (brand) {
          return brand;
        }
        console.log('brands not found');
        this.router.navigate([null]);
      }),
      catchError(error => {
        console.log(`error: ${error}`);
        this.router.navigate([null]);
        return of(null);
      })
  );
  }
}
