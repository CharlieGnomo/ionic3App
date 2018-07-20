import { Component, Input  } from '@angular/core';

/**
 * Generated class for the SliderCompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slider-comp',
  templateUrl: 'slider-comp.html'
})
export class SliderCompComponent {

  @Input() slide: any;

  constructor() {
  }

}
