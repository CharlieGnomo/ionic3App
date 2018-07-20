import { Component, Input } from '@angular/core';

/**
 * Generated class for the CardCompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-comp',
  templateUrl: 'card-comp.html'
})
export class CardCompComponent {

  @Input() card: any;
  constructor() {
  }

}
