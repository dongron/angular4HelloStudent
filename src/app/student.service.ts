import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENCI } from './dane-studenci';

@Injectable()
export class StudentService {
	getStudents() {
		return Promise.resolve(STUDENCI);
	}
}
