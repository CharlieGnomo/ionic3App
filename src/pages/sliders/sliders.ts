import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sliders',
  templateUrl: 'sliders.html',
})
export class SlidersPage {
  slides: Array<{title: string, content: string, color: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initView();
  }

  initView() {
    this.initSlides();
  }

  initSlides() {
    this.slides = [
      {title: 'Slide 1', content: 'Este es el slide 1', color: 'red'},
      {title: 'Slide 2', content: 'Este es el slide 2', color: 'blue'},
      {title: 'Slide 3', content: 'Este es el slide 3', color: 'green'},
      {title: 'Slide 4', content: 'Este es el slide 4', color: 'yellow'},
    ];
  }

}
