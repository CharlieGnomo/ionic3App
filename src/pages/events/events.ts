import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { CacheService } from 'ionic-cache';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventProv: EventProvider, private cache: CacheService, private net: Network) {
    this.initView();
  }

  initView() {
    this.initEvents();
  }

  async initEvents() {
    let evCached = await this.cache.itemExists('events');
    let data = [];
    console.log(this.net);
    this.eventProv.getEvents()
    .then((res) => {
      this.events = res;
      this.cache.saveItem('events', this.events);
      console.log('Con Conexión');
    })
    .catch(async (err) => {
      console.log('Sin Conexión');
      if(evCached){
        data = await this.cache.getItem('events');
        this.events = data;
        console.log('Está cacheada');
      }else{
        console.log('No está cacheada');
        this.events = data;
      }
    });
    
  }

}
