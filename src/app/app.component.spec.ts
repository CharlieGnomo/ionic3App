import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  CacheMock,
  TranslateMock
} from './../../test-config/mocks.ionic';
import { TranslateModule, TranslateService } from '../../node_modules/@ngx-translate/core';
import { CacheService } from '../../node_modules/ionic-cache';
import { HomePage } from '../pages/home/home';

describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp),
        TranslateModule
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: TranslateService, useClass: TranslateMock },
        { provide: CacheService, useClass: CacheMock },
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it('rootPage is HomePage', () => {
      expect(component.rootPage).toBe(HomePage);
  });

});