import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidersPage } from './sliders';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SlidersPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidersPage),
    ComponentsModule
  ],
})
export class SlidersPageModule {}
