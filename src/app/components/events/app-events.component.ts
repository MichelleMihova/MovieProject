import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './app-events.component.html',
  styleUrls: ['./app-events.component.css']
})
export class EventsComponent implements OnInit {

  displayedColumns = ['name', 'date', 'place', 'del'];
  dataSource = ELEMENT_DATA;
  removeSign: string = '&#10008';

    ngOnInit() {
        console.log("xxxxx");
    }

    removeEvent() {
      alert('stana');
    }
}

const ELEMENT_DATA: {}[] = [
  {name: 'Hydrogen', date: "test", place: 'H', del: ''},
  {name: 'Helium', date: "test", place: 'He', del: ''},
  {name: 'Lithium', date: "test", place: 'Li', del: ''},
  {name: 'Beryllium', date: "test", place: 'Be', del: ''},
  {name: 'Boron', date: "test", place: 'B', del: ''},
  {name: 'Carbon', date: "test", place: 'C', del: ''},
  {name: 'Nitrogen', date: "test", place: 'N', del: ''},
  {name: 'Oxygen', date: "test", place: 'O', del: ''},
  {name: 'Fluorine', date: "test", place: 'F', del: ''},
  {name: 'Neon', date: "test", place: 'Ne', del: ''},
];
