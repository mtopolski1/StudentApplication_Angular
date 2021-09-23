import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(){
    return [
      {
        id : 1,
        firstName : 'Darion',
        lastName : 'Thompson',
        age : 31,
        balanceOwed : 100
      },
      {
        id : 2,
        firstName : 'Robert',
        lastName : 'Baxter',
        age : 25,
        balanceOwed : 50000
      }
    ];
  }
}