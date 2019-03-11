import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' || req.method === 'PUT') {
      req = req.clone({
        setHeaders: {'Content-Type': 'application/json; charset=utf-8'}
      });
      console.log('api post request:', req);
    }
    // if (req.method === 'POST') {}
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log('api call success', event);
          }
        },
        error => {
          if (event instanceof HttpResponse) {
            console.log('api call error', error);
          }
        }
      )
    );
  }
}
