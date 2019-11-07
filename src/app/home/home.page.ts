import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LecturaQRPage } from '../lectura-qr/lectura-qr.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController,private router: Router) {}


  nuevoCliente(){


    this.router.navigate(['/lectura-qr'])
  }

  goToResetPassword(){

    alert("Pasword refresh")
 
  }
}
