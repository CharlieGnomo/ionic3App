//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  URL: string = '/api';

  //constructor(private http: HttpClient) {
  constructor() {

  }

  getEvents() {
    return Promise.resolve([
      { title: 'Event 1', date: '01-01-2019', location: 'C/ del Uno' },
      { title: 'Event 2', date: '02-01-2019', location: 'C/ del Dos' },
      { title: 'Event 3', date: '03-01-2019', location: 'C/ del Tres' },
      { title: 'Event 4', date: '04-01-2019', location: 'C/ del Cuatro' },
      { title: 'Event 5', date: '05-01-2019', location: 'C/ del Cinco' },
      { title: 'Event 6', date: '06-01-2019', location: 'C/ del Seis' },
    ]);
    /* return Promise.resolve([
      { title: 'Event 1', date: '01-01-2019', location: 'C/ del Uno' },
      { title: 'Event 2', date: '02-01-2019', location: 'C/ del Dos' },
      { title: 'Event 3', date: '03-01-2019', location: 'C/ del Tres' },
      { title: 'Event 4', date: '04-01-2019', location: 'C/ del Cuatro' },
      { title: 'Event 5', date: '05-01-2019', location: 'C/ del Cinco' },
      { title: 'Event 6', date: '06-01-2019', location: 'C/ del Seis' },
    ]); */
    /* return this.http.get(this.URL).toPromise(); */
  }

}
