import { Component, OnInit } from '@angular/core';
import { NotificationsStoreService } from '../notifications-store.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styles: []
})
export class ReceiverComponent implements OnInit {
  public notes$;
  constructor(private notificationsStore: NotificationsStoreService, private httpClient : HttpClient) {}
  ngOnInit() {
  this.notes$ = this.notificationsStore.select$();
  }

  public forceError() {
    const privateUrl = 'https://api-base.herokuapp.com/api/priv/secrets';
    this.httpClient.get(privateUrl).subscribe();
    const notFoundUrl = 'https://api-base.herokuapp.com/api/pub/items/9';
    this.httpClient.get(notFoundUrl).subscribe();
    }
}
