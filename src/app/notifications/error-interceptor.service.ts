import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NotificationsStoreService } from './notifications-store.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  constructor(private notificationsStore: NotificationsStoreService) {}
  /*
public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(null, err => console.log(err)));
    // return next.handle(req).pipe(catchError(err => of(null)));
    // return next.handle(req).pipe(catchError(err => throwError(err)));
    }*/
    public intercept(req, next) {
      return next.handle(req).pipe(catchError(this.handleError.bind(this)));
      }
    private handleError(err) {
        const unauthorized_code = 401;
        let userMessage = 'Fatal error';
        if (err instanceof HttpErrorResponse) {
          if (err.status === unauthorized_code) {
          userMessage = 'Authorization needed';
          } else {
          userMessage = 'Comunications error';
          }
        }
        this.notificationsStore.dispatch(userMessage);
        return throwError(err);
      }


}
