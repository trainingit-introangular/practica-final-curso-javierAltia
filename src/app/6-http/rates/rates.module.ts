import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatesRoutingModule } from './rates-routing.module';
import { RatesComponent } from './rates/rates.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ObseratesComponent } from './obserates/obserates.component';
import { AuditInterceptorService } from './audit-interceptor.service';


@NgModule({
  declarations: [RatesComponent, ObseratesComponent],
  imports: [
    CommonModule,
    RatesRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuditInterceptorService,
    multi: true
    }
    ]
})
export class RatesModule { }
