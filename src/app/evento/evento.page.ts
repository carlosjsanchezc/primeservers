import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CoreService } from './../core.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';


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
  

  constructor(private route:ActivatedRoute,private core:CoreService,private http:HttpClient,private router:Router,private modalCtrl:ModalController) { }

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
  } else
  {
    let url="https://tbitpro.com/primeservers/api.php?opcion=modificarevento&nombre="+this.nombre+"&fecha_inicio="+this.fecha_inicio+"&fecha_fin="+this.fecha_fin+"&hora_inicio="+this.hora_inicio+"&hora_fin="+this.hora_fin;
    url+="&id="+this.id.toString();
    console.log("Modificar URL:",url);
    this.http.get(url).subscribe(data=>{
      this.router.navigateByUrl("/tabs/tab1");
      
    });
  }
  this.modalCtrl.dismiss();
  
 
}
onClick(){
  console.log("Regresar");
  this.modalCtrl.dismiss();
}
 ionViewWillEnter(){
   let todoId = this.route.snapshot.paramMap.get('id');
    this.titulo=this.core.evento.nombre;
  this.nombre=this.core.evento.nombre;
  this.id=Number(this.core.evento.id);

  this.fecha_inicio=this.core.evento.fecha_inicio;
  this.hora_inicio=this.core.evento.hora_inicio;
  this.fecha_fin=this.core.evento.fecha_fin;
  this.hora_fin=this.core.evento.hora_fin;
  //this.id=inttostr(todoId);
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
