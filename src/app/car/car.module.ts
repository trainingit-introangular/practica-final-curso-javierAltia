import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car/car.component';
import { DisplayComponent } from './car/display/display.component';
import { PedalesComponent } from './car/pedales/pedales.component';


@NgModule({
  declarations: [CarComponent, DisplayComponent, PedalesComponent],
  imports: [
    CommonModule,
    CarRoutingModule
  ]
})
export class CarModule { }
