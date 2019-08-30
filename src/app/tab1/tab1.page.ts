import { CoreService } from './../core.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  eventos:any=[];
  constructor(private http:HttpClient,private core:CoreService) {}
  SetCoreEvento(nombre,fecha_inicio,hora_inicio,fecha_fin,hora_fin){
    console.log("fecha_fin:",fecha_fin);
    this.core.nombre=nombre;
    this.core.evento.nombre=nombre;
    this.core.evento.fecha_inicio=fecha_inicio;
    this.core.evento.fecha_fin=fecha_fin;
    this.core.evento.hora_fin=hora_fin;
    this.core.evento.hora_inicio=hora_inicio;
    

    console.log("Nombre:",nombre);

  }
  ionViewWillEnter(){
    this.http.get("https://tbitpro.com/primeservers/api.php?opcion=listareventos").subscribe(data=>{
      this.eventos=data['datos'];
      console.log(this.eventos);
    });
   
  }
}
