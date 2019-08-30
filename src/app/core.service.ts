import { Injectable } from '@angular/core';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  evento={id:"",nombre:"",fecha_inicio:"",hora_inicio:"",fecha_fin:"",hora_fin:""};
  nombre:string="";
  constructor() { }
}
