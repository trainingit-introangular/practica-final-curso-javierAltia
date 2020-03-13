import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ErrorInterceptorService } from './error-interceptor.service';


@NgModule({
  declarations: [SenderComponent, ReceiverComponent],
  imports: [
  CommonModule,
  NotificationsRoutingModule,
  HttpClientModule,
  FormsModule
  ],
  providers: [
  {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptorService,
  multi: true
  }
  ]
  })
export class NotificationsModule { }
