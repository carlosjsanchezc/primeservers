import { CoreService } from './../core.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EventoPage } from '../evento/evento.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  eventos: any = [];
  constructor(private http: HttpClient, private core: CoreService, private router: Router, public modalCtrl: ModalController) { }

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
      component: EventoPage
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
      this.eventos = data['datos'];
      console.log(this.eventos);
    });

  }
}
