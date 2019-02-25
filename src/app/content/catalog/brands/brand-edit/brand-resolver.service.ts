import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {BrandApiService} from './brand-api.service';
import {IBrand} from '../../../../_model/interface/brand';

@Injectable()
export class BrandResolverService implements Resolve<IBrand> {
  constructor(private api: BrandApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBrand> {
    const id = route.paramMap.get('id');
    return this.api.getBrand(+id)
      .map(brand => {
        if (brand) {
          return brand;
        }
        console.log('brands not found');
        this.router.navigate([null]);
      })
      .catch(error => {
        console.log(`error: ${error}`);
        this.router.navigate([null]);
        return Observable.of(null);
      });
  }
}
