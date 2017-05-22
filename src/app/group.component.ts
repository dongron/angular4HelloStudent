import { Component } from '@angular/core';
import {Student} from './student';



const STUDENCI: Student[] = [
  { imie: 'Jan', nazwisko: 'Kowalski', ocena: 4.0 },
  { imie: 'Halina', nazwisko: 'Nowak', ocena: 2.0 },
  { imie: 'Marek', nazwisko: 'Wąsiński', ocena: 3.5 },
  { imie: 'Beata', nazwisko: 'Rybak', ocena: 4.0 },
  { imie: 'Wojciech', nazwisko: 'Lisowski', ocena: 3.0 },
  { imie: 'Tomasz', nazwisko: 'Bednarz', ocena: 5.0 },
  { imie: 'Agnieszka', nazwisko: 'Skorupka', ocena: 4.5 },
  { imie: 'Kamil', nazwisko: 'Celiński', ocena: 2.5 }
];

@Component({
  selector: 'grupa-studentow',
  template: `
  <h1>Grupa studentów</h1>
  <ul>
    <li *ngFor="let stud of grupa" (click)="onSelect(stud)">
      Student {{stud.imie}} {{stud.nazwisko}}. Uzyskana ocena {{stud.ocena}}.
      <b *ngIf="stud.ocena<3.0">Brak zaliczenia!</b>
    </li>
  </ul>
  <hr>

  <student [student]="student"> </student>
  `,
})

export class GroupComponent  {
  student: Student = null;
  onSelect(stud: Student) {
    this.student = stud;
  };
  public grupa = STUDENCI;
}
