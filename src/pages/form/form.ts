import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  form: any;
  typePasswd: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initView();
  }

  initView() {
    this.initForm();
  }

  initForm() {
    this.form = {
      username : '',
      password: '',
      telefono: '',
      intereses: {
        futbol: false,
        musica: false,
        leer: false
      },
      tipo_via: ''
    }

    this.typePasswd = 'password';
  }

  enviarForm() {
    console.log('Enviado', this.form);
  }

  showPass() {
    this.typePasswd = this.typePasswd === 'password' ? 'text' : 'password';
  }

}
