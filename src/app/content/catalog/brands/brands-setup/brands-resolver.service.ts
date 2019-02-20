import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiService} from '../../../../_api/api.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {IBrand} from '../../../../_model/interface/brand';

@Injectable()
export class BrandsResolverService implements Resolve<IBrand> {

  constructor (private apiService: ApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBrand> {
    return this.apiService.getAllBrands()
      .map(brands => {
        if (brands) {
          return brands;
        }
        console.log(`products not found: ${''}`);
        this.router.navigate([null]);
        return null;
      })
      .catch(error => {
        console.log(`retrieval error: ${error}`);
        this.router.navigate([null]);
        return Observable.of(null);
      });
  }
}
