import { NgModule } from '@angular/core';
import { CardCompComponent } from './card-comp/card-comp';
import { SliderCompComponent } from './slider-comp/slider-comp';
import { IonicModule } from 'ionic-angular';
import { ItemCompComponent } from './item-comp/item-comp';
import { TranslateService, TranslateModule } from '../../node_modules/@ngx-translate/core';

@NgModule({
    declarations: [CardCompComponent,
        SliderCompComponent,
        ItemCompComponent],
    imports: [IonicModule,
    TranslateModule],
    exports: [CardCompComponent,
        SliderCompComponent,
        ItemCompComponent],
        providers: [
            TranslateService
        ]
})
export class ComponentsModule { }
