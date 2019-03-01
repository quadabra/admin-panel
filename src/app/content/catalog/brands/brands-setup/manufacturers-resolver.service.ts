import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {ApiService} from '../../../../_api/api.service';
import {IManufacturer} from '../../../../_model/interface/manufacturer';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class ManufacturersResolverService implements Resolve<IManufacturer> {

  constructor(private apiService: ApiService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IManufacturer> {
    return this.apiService.getAllManufacturers().pipe(
      map(manufacturers => {
        if (manufacturers) {
          return manufacturers;
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
