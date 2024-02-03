import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  private formdataUpdate = new BehaviorSubject<any>(null);
  Data = this.formdataUpdate.asObservable();
  updatedVal: any;
  setFormData(Data: any) {
    this.formdataUpdate.next(Data);
  }

  // getFormData() {
  //   return this.formdataUpdate.value;
  // }
}
