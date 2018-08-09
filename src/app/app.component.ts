import { Component } from '@angular/core';
import { Doctor } from './Doctor';
import { CRUDManager } from './CRUDManager';
import { getNextId } from './IdGenerator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doctors: Doctor[] = [];
  manager: CRUDManager<Doctor>;
  showAddScreen: boolean = false;
  listScreen: boolean = true;
  editMode: boolean = false;
  addMode: boolean = false;
  doctor: Doctor = new Doctor();

  constructor(){
    let d1: Doctor = new Doctor(1001, 'Madhan', 12, 700, 'assets/images/images (2).jpg');
    let d2: Doctor = new Doctor(1002, 'Sathish', 2, 300, 'assets/images/images (1).jpg');
    let d3: Doctor = new Doctor(1003, 'John', 21, 1000, 'assets/images/images (3).jpg');
    let d4: Doctor = new Doctor(1004, 'Jaya', 8, 800, 'assets/images/images (4).jpg');
    let d5: Doctor = new Doctor(1005, 'Ramanan', 19, 1500, 'assets/images/images (1).jpg');

    this.doctors.push(d1);
    this.doctors.push(d2);
    this.doctors.push(d3);
    this.doctors.push(d4);
    this.doctors.push(d5);

    this.manager= new CRUDManager();
    this.manager.mydata= this.doctors;
  }

  deleteDoctor(i: number){
    this.manager.delete(i);
  }

  addToDoctorList():void{
    this.manager.create(this.doctor);
    this.showAddScreen = false;
    this.addMode = false;    this.editMode = false;    this.listScreen = true;
  }

  setCurrentData(i: number): void {
    this.doctor = this.manager.find(i);
    console.log(this.doctor);
    this.listScreen = false;    this.addMode= false;    this.editMode = true;
  }

  updateDoctor(): void {
    this.editMode = false;    this.addMode = false;    this.listScreen = true;
    this.manager.update(this.doctor);
  }

  createDoctor(): void{
    this.listScreen = false;    this.editMode = false; this.addMode = true;
    this.doctor = new Doctor();
  }
}
