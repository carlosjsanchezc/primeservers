import { HttpClient } from '@angular/common/http';
import { CoreService } from './../core.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Time } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage {
  id:number=0;
  titulo:string;
  nombre:string;
  fecha_inicio:string;
  hora_inicio:string;
  fecha_fin:string;
  hora_fin:string;
  

  constructor(private route:ActivatedRoute,private core:CoreService,private http:HttpClient) { }

Guardar(){
  if (this.id==0){
   /* $nombre=checkget("nombre");
    $fecha_inicio=checkget("fecha_inicio");
    $fecha_fin=checkget("fecha_fin");
    $hora_inicio=checkget("hora_inicio");
    $hora_fin=checkget("hora_fin");*/
    let url="https://tbitpro.com/primeservers/api.php?opcion=insertarevento&nombre="+this.nombre+"&fecha_inicio="+this.fecha_inicio+"&fecha_fin="+this.fecha_fin+"&hora_inicio="+this.hora_inicio+"&hora_fin="+this.hora_fin;
    console.log("Agregar URL:",url);
    this.http.get(url).subscribe(data=>{

    });
  }
  
 
}
 ionViewWillEnter(){
   let todoId = this.route.snapshot.paramMap.get('id');
    this.titulo=todoId;
  this.nombre=this.core.evento.nombre;
  this.fecha_inicio=moment(this.core.evento.fecha_inicio).format('DD-MM-YYYY');
  this.hora_inicio=moment(this.core.evento.hora_inicio).format('DD-MM-YYYY');
  this.fecha_fin=moment(this.core.evento.fecha_fin).format('DD-MM-YYYY');
  this.hora_fin=moment(this.core.evento.hora_fin).format('DD-MM-YYYY');
  
    if (todoId=="0") {
      this.titulo="Agregando Nuevo";
      this.nombre="";
      this.fecha_inicio=moment(new Date).toISOString();
      this.fecha_fin=moment(new Date).toISOString();
      this.hora_inicio=moment(new Date).toISOString();
      this.hora_fin=moment(new Date).toISOString();

    console.log("Core",this.core.evento.nombre);
 }
}

}
