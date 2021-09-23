import { identifierModuleUrl } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../Models/students';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @Input() currentStudent! : Student;
  @Output() newStudent : EventEmitter<Student> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addUser(id : string, firstName : string, lastName : string, age:string, balanceOwed :string){
    console.log(`Added User ${firstName}`);

    let student = {
      id : Number(id),
      firstName : firstName,
      lastName : lastName,
      age : Number(age),
      balanceOwed : Number(balanceOwed)
    };

    this.newStudent.emit(student);
  }
}
