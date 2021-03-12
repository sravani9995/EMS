import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  navigationMessage:string="homepage";
  constructor() { }
}
