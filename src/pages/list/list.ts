import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import { CacheService } from 'ionic-cache';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  items: Array<{title: string, img: string}>;
  itemsSaved: Array<{title: string, img: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cache: CacheService) {
    this.initView();
  }

  initView() {
    this.initItems();
  }

  initItems() {
    this.items = [
      {title: 'Item 1', img: './../../assets/imgs/logo.png'},
      {title: 'Item 2', img: './../../assets/imgs/logo.png'},
      {title: 'Item 3', img: './../../assets/imgs/logo.png'},
      {title: 'Item 4', img: './../../assets/imgs/logo.png'}
    ];
    this.itemsSaved = [];
  }

  delete(elem) {
    this.removeFromItems(elem);
  }
  
  save(elem) {
    this.itemsSaved.push(elem);
    this.removeFromItems(elem);
    this.cache.saveItem('itemsSaved', this.itemsSaved, 'itemsSaved');
  }

  removeFromItems(elem) {
    _.remove(this.items, function(n){
      return n == elem;
    });
  }

  reorderItems(event) {
    const aux = this.items[event.to];
    this.items[event.to] = this.items[event.from];
    this.items[event.from] = aux;
  }

  viewDetails(item) {
    this.navCtrl.push('DetailsPage', {item});
  }

}
