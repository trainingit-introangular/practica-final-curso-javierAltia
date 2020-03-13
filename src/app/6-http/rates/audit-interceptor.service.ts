import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditInterceptorService implements HttpInterceptor {
  constructor() {}
  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    return next.handle(req).pipe(
    filter((event: HttpEvent<any>) => event instanceof HttpResponse),
    tap((resp: HttpResponse<any>) => this.auditEvent(resp, started))
    );
  }
  private auditEvent(resp: HttpResponse<any>, started: number) {
  const elapsedMs = Date.now() - started;
  const eventMessage = resp.statusText + ' on ' + resp.url;
  const message = eventMessage + ' in ' + elapsedMs + 'ms';
  console.log(message);
  }
  }
