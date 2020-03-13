import { Injectable } from '@angular/core';
import { ConverterService } from './converter.service';
import { CultureConverter } from './culture-converter';

@Injectable({
  providedIn: 'root'
})
export class UsaConverterService implements CultureConverter {
  sourceCulture = 'Europe';
  targetCulture = 'USA';
  constructor(private converterService: ConverterService) {}
  convertDistance = this.converterService.fromKilometersToMiles;
  convertTemperature = this.converterService.fromCelsiusToFarenheit;
}
