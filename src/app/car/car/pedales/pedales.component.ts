import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pedales',
  templateUrl: './pedales.component.html',
  styles: []
})
export class PedalesComponent implements OnInit {
  @Input() public disableBrake: boolean;
  @Input() public disableThrottle: boolean;
  @Output() public brake = new EventEmitter<number>();
  @Output() public throttle = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
