import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiUrl = 'https://api1.yubilly.com'

  constructor() { }
}
