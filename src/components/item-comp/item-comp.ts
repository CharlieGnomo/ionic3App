import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the ItemCompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-comp',
  templateUrl: 'item-comp.html'
})
export class ItemCompComponent {
  @Input() item: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  saveE() {
    this.save.emit(this.item);
  }

  deleteE() {
    this.delete.emit(this.item);
  }

}
