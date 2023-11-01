import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApplypageComponent } from '../applypage/applypage.component';
import { MoreInfopageComponent } from '../more-infopage/more-infopage.component';
interface Location {
  id: number;
  name: string;
}

interface Department {
  id: number;
  name: string;
  locationId: number;
  vacancies: Vacancy[];
}

interface Vacancy {
  id: number;
  name: string;
  departmentId: number;
}
@Component({
  selector: 'app-carrierpage',
  templateUrl: './carrierpage.component.html',
  styleUrls: ['./carrierpage.component.css']
})
export class CarrierpageComponent implements  OnInit  {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(public dialog: MatDialog) {}


  departments = [
    { "departments":"QA Analyst"  },
    {  "departments":"Data Analyst" },
    {  "departments":"Data Research Analyst"  },
    {  "departments":"Team Lead- QA"  },
    {  "departments":"Team Lead- Operations"  },
    {'departments':"IT Developer"},
    {'departments':"MIS Executiv"},
    {'departments':"Appointment Generation Executive"},
    {'departments':"Manager - Operations"},
    {'departments':"HR Executive"},
    {'departments':"HR Manager"},

  ];

  location=[
    {"location":"pune,IND"}
  
  ]

job=[
  {
    
    "id": 1,
    "title": "Quality Analyst ",
    "opening":" 3",
    "experience": "2+",
    "location":"Pune, IND",
    "info":"More Info",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 2,
    "title": "Team Lead  ",
    "opening":"1",
    "experience": "2+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 3,
    "title": "IT Developer",
    "opening":"5",
    "experience": "1+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 4,
    "title": "Data Research",
    "opening":"10",
    "experience": "1+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 5,
    "title": "Manager ",
    "opening":"1",
    "experience": "3+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 6,
    "title": "Team Lead  ",
    "opening":"2",
    "experience": "2+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  }, {
    
    "id": 7,
    "title": "Appoinment",
    "opening":"2",
    "experience": "2+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 8,
    "title": "Management Information system ",
    "opening":"3",
    "experience": "1+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 9,
    "title": "HR Executive ",
    "opening":"2",
    "experience": "1+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 10,
    "title": "HR Manager ",
    "opening":"1",
    "experience": "2+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  },]


  openDialog(){
    const dialogRef = this.dialog.open(ApplypageComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  
  openDialog2(){
    const dialogRef = this.dialog.open(MoreInfopageComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  }






