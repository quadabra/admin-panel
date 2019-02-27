import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {IProduct} from '../../../../_model/interface/product';
import {ApiService} from '../../../../_api/api.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductResolverService implements Resolve<IProduct> {

  constructor(private apiService: ApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    const id = +route.params['id'];
    return this.apiService.getProduct(+id)
      .map(product => {
        if (product) {
          return product;
        }
        console.log(`product not found: ${id}`);
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
