import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '../../../node_modules/@angular/platform-browser';

/**
 * Generated class for the WebviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-webview',
  templateUrl: 'webview.html',
})
export class WebviewPage {

  url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer) {
    this.initView();
  }

  initView(){
    this.url = 'https://gestamp.com';
  } 

  getUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
