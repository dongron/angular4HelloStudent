import { Component, Input } from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'student',
  template: `  <h4>Zmiana oceny:</h4>
    <div *ngIf="student">
      <label >Student: {{student.imie}}</label>
      <input [(ngModel)]="student.ocena" type="number" name="ocena" min="2.0" max="5.0" step="0.5" placeholder="ocena">
    </div>
    <hr>`,
})

export class StudentComponent {
  @Input()
  student: Student;
}
