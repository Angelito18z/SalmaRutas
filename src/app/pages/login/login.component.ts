import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private navController : NavController) { }

  ngOnInit() {}


  iniciarSesion(){
     this.navController.navigateForward("/register");
  }
}
