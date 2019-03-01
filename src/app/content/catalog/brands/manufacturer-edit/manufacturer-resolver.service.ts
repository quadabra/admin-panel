import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {ManufacturerApiService} from './manufacturer-api.service';
import {IManufacturer} from '../../../../_model/interface/manufacturer';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class ManufacturerResolverService implements Resolve<IManufacturer> {

  constructor (private api: ManufacturerApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IManufacturer> {
    const id = route.paramMap.get('id');
    return this.api.getManufacturer(+id).pipe(
      map(manufacturer => {
        if (manufacturer) {
          return manufacturer;
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
