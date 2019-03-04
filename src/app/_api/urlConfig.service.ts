import {Injectable} from '@angular/core';

@Injectable()
export class UrlConfigService {
  private baseUrl = 'https://api.grey-shop.com/';
  private versionUrl = 'v1/';
  private KEYWORDS = {
    menu: 'menu',
    product: 'product',
    manufacturer: 'manufacturer',
    brand: 'brand'
  };
  private SUFFIX = {

  };

  getDataUrl(keyword: string, suffix: string): string {
    return this.baseUrl + this.versionUrl + this.KEYWORDS[keyword] + suffix;
  }
  getAuthUrl(): string {
    return 'https://auth.grey-shop.com/app/login';
  }
}
