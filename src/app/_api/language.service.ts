import {Injectable} from '@angular/core';
import {ILanguage} from '../_model/interface/language';
import {ApiService} from './api.service';
import {UrlConfigService} from './url-config.service';

@Injectable()
export class LanguageService {
  private apiKeyword = 'langs';
  private apiSuffix = '';
  private systemLanguages = [];
  private productLanguages: ILanguage[];

  constructor(private api: ApiService,
              private url: UrlConfigService) {
  }

  setProductLangs(): void {
    this.api.getData(this.url.getDataUrl(this.apiKeyword, this.apiSuffix)).subscribe(
      {
        next: data => {
          this.productLanguages = data;
        }
      });
  }

  getProductLangs(): ILanguage[] {
    return this.productLanguages;
  }
}
