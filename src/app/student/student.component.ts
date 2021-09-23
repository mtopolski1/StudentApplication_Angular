import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/students';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentTitle! : string;
  firstName! : string ;
  isActive! : boolean;
  students! : Student[];
  service : StudentService;

  currentStudent : Student = {
    id : 0, 
    firstName : '',
    lastName : '',
    age : 0,
    balanceOwed : 0
  }
  //ONly use this one for dependency injection....
  constructor() { 
    this.service = new StudentService();
  }

  //We use this one for initialization of properties or actions that need to happen after the constructor runs...
  ngOnInit(): void {
    this.studentTitle = 'Welcome to the Student App';
    this.firstName = 'Lebron';
    this.isActive = false;
    this.students = this.service.getStudents();
  }

  onSave(){
    console.log("Save button has been clicked");
    console.log(this.firstName);
    this.isActive = !this.isActive;
  }


  // onSaveTwo(event : Event){
  //   event.stopPropagation
  //   console.log("Save button has been clicked")
  // }

  onNewStudent(student : Student){
    this.students.unshift(student);
  }

  removeStudent(student : Student){
    //do this by ID
    console.log(student.id);
    let index = this.students.findIndex(x => x.id === student.id);
    this.students.splice(index, 1);
  }

  editStudent(student : Student){
    this.currentStudent = student;
  }
}
