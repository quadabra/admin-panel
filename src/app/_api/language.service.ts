import {Injectable} from '@angular/core';
import {ILanguage} from '../_model/interface/language';
import {ApiService} from './api.service';
import {UrlConfigService} from './url-config.service';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class LanguageService {
  private systemLanguages = [];
  private productLanguages: Observable<ILanguage[]>;

  constructor(private api: ApiService,
              private url: UrlConfigService) {
  }

  setProductLangs(): void {
    this.api.getData(this.url.getDataUrl('langs', '')).subscribe({next: data => this.productLanguages = data});
  }

  getProductLangs(): Observable<ILanguage[]> {
    return this.productLanguages.pipe(
      map(languages => {
        if (languages) {
          return languages;
        }
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    );
  }
}
