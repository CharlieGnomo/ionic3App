import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import { EventProvider } from '../../providers/event/event';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network';


@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
    HttpClientModule
  ],
  providers: [
    EventProvider,
    Network
  ]
})
export class EventsPageModule {}
