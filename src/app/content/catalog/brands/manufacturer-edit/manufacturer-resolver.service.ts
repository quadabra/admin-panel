import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ManufacturerApiService} from './manufacturer-api.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {IManufacturer} from '../../../../_model/interface/manufacturer';

@Injectable()
export class ManufacturerResolverService implements Resolve<IManufacturer> {

  constructor (private apiService: ManufacturerApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IManufacturer> {
    const id = route.paramMap.get('id');
    return this.apiService.getManufacturer(+id)
      .map(manufacturer => {
        if (manufacturer) {
          return manufacturer;
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
