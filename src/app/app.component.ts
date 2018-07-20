import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CacheService } from 'ionic-cache';
import { TranslateService } from '@ngx-translate/core';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private cache: CacheService, public translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.configCache();
      this.configTranslations();
      splashScreen.hide();
    });
  }

  goToPage(page) {
    if (page === 'HomePage') {
      this.nav.setRoot(HomePage);
    } else {
      this.nav.setRoot(page);
    }
  }

  configTranslations() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  setLang({_value}) {
    if(_value != this.translate.currentLang){
      this.translate.use(_value);
    }
  }

  configCache() {
    this.cache.setDefaultTTL(60 * 60);
    this.cache.setOfflineInvalidate(false);
  }
}

