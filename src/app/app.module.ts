import {NgModule} from '@angular/core';
import {NgtUniversalModule} from '@ng-toolkit/universal';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {MaterialModule} from './material.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';



import {ApiService} from './_api/api.service';
import {AuthGuardService} from './_guards/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {UrlConfigService} from './_api/url-config.service';
import {LanguageService} from './_api/language.service';
import {ApiInterceptor} from './_api/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule,
    StoreModule.forRoot({}),
  ],
  providers: [
    ApiService,
    AuthGuardService,
    UrlConfigService,
    LanguageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    ],
})
export class AppModule {
}
