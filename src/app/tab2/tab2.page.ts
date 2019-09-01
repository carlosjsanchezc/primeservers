import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { CoreService } from './../core.service';
import { Component } from '@angular/core';
import { TrabajadorPage } from '../trabajador/trabajador.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  trabajadores:any=[];
  constructor(private core:CoreService,private modalCtrl:ModalController,private http:HttpClient) {}
  async SetCoreEvento(nombre, fecha_inicio, hora_inicio, fecha_fin, hora_fin, id) {
    this.core.nombre = nombre;
    this.core.evento.nombre = nombre;
    this.core.evento.fecha_inicio = fecha_inicio;
    this.core.evento.fecha_fin = fecha_fin;
    this.core.evento.hora_fin = hora_fin;
    this.core.evento.hora_inicio = hora_inicio;
    this.core.evento.id = id;
    console.log("fecha_fin:", fecha_fin);


    const modal = await this.modalCtrl.create({
      component: TrabajadorPage
    });

    modal.onDidDismiss().then(data => {
      let a = data;
      this.ionViewWillEnter();

    })



    await modal.present();
 
  }

  Eliminar(id){

  }
  ionViewDidEnter() {
    console.log("Refrescando");

    this.ionViewWillEnter();
  }

  ionViewCanEnter() {
    console.log("Refrescando");

  }
  ionViewWillEnter() {
    console.log("Refrescando");
    this.http.get("https://tbitpro.com/primeservers/api.php?opcion=listareventos").subscribe(data => {
      //this.eventos = data['datos'];
      console.log(this.eventos);
    });

  }
}
