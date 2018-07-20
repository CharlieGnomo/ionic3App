import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: Array<{ title: string, content: string }>;

  constructor(public navCtrl: NavController) {
    this.initView();
  }

  goToPage(page) {
    this.navCtrl.push(page);
  }

  initView() {
    this.initCards();
  }

  initCards() {
    this.cards = [
      {title: '1', content: '1'},
      {title: '2', content: '2'},
      {title: '3', content: '3'}
    ];
  }

}
