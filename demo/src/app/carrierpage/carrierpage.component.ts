import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  countries = [
    { name: 'Remote, United States', value: 'IN', departments: ['Marketing', 'Finance','Engineering','Security','Product','Support','Design','Growth'] },
    { name: 'Remote, Colombia', value: 'PK', departments: ['Executive Assistant', 'Product Advocate (Remote)','Engineering','Security','Product','Support','Design','Growth']  },
    { name: 'Remote, Argentina', value: 'BG', departments: ['Marketing', 'Finance','Engineering','Security','Product','Support','Design','Growth']  }
  ];
  
  cities: string[] = [];
  selectedCountry: any;
  selectedCity: any;
  
  populateCities() {
    // Find the selected country
    const selectedCountryObj = this.countries.find(country => country.value === this.selectedCountry);
  
    // Update cities based on the selected country
    this.cities = selectedCountryObj ? selectedCountryObj.departments : [];
    this.selectedCity = ''; // Reset the selected city
  }
  





  vacancies: Vacancy[] = [
    { id: 1, name: 'Engineering', departmentId: 1 },
    { id: 2, name: 'Sales', departmentId: 1 },
    { id: 3, name: 'Marketing', departmentId: 1 }
  ];
  
  locations: Location[] = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'London' },
    { id: 3, name: 'Tokyo' }
  ];

  departments: Department[] = [
    { id: 1, name: 'Engineering', locationId: 1, vacancies: [] },
    { id: 2, name: 'aaaaa', locationId: 1, vacancies: [] },
    { id: 3, name: 'Marketing', locationId: 1, vacancies: [] },
    { id: 4, name: 'Engineering', locationId: 2, vacancies: [] },
    { id: 5, name: 'Design', locationId: 2, vacancies: [] },
    { id: 6, name: 'Customer Support', locationId: 2, vacancies: [] },
    { id: 7, name: 'Engineering', locationId: 3, vacancies: [] },
    { id: 8, name: 'Product', locationId: 3, vacancies: [] },
    { id: 9, name: 'Sales', locationId: 3, vacancies: [] }
  ];

  selectedLocation: Location = { id: 0, name: '' }; // Initialize the selectedLocation property with a default Location object
  selectedDepartment: Department = { id: 0, name: '', locationId: 0, vacancies: [] }; // Initialize the selectedDepartment property with a default Department object
  // vacancies: Vacancy[] = [];

  





  onLocationChange(location: Location) {
    this.selectedLocation = location;
    this.departments = this.departments.filter(department => department.locationId === location.id);
  }

  onDepartmentChange(department: Department) {
    this.selectedDepartment = department;
    if (department.vacancies) {
      this.vacancies = department.vacancies;
    } else {
      this.vacancies = [];
    }
  }



  
  selectedOption: any;

  constructor() { }

  ngOnInit() {
    this.selectedOption = 1;
  }

  onOptionSelected(option:number) {
    this.selectedOption = this.selectedOption;
  }


job=[
  {
    
    "id": 1,
    "title": "Quality Analyst ",
    "opening":" 3",
    "experience": "2+",
    "location":"",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 1,
    "title": "Team Lead  ",
    "opening":"1",
    "experience": "2+",
    "location":"Pune, IND",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 1,
    "title": "IT Developer",
    "opening":"",
    "experience": "3+",
    "location":"",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 1,
    "title": "Quality Analyst ",
    "opening":"",
    "experience": "3+",
    "location":"",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 1,
    "title": "Quality Analyst ",
    "opening":"",
    "experience": "3+",
    "location":"",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 1,
    "title": "Quality Analyst ",
    "opening":"",
    "experience": "3+",
    "location":"",
    "info":"",
    'apply':'https://www.google.com/'
  }, {
    
    "id": 1,
    "title": "Quality Analyst ",
    "opening":"",
    "experience": "3+",
    "location":"",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 1,
    "title": "Quality Analyst ",
    "opening":"",
    "experience": "3+",
    "location":"",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 1,
    "title": "Quality Analyst ",
    "opening":"",
    "experience": "3+",
    "location":"",
    "info":"",
    'apply':'https://www.google.com/'
  },
  {
    
    "id": 1,
    "title": "Quality Analyst ",
    "opening":"",
    "experience": "3+",
    "location":"",
    "info":"",
    'apply':'https://www.google.com/'
  },]

// opening=['3']
// experience=['2+']
// location=['pune','kolkata']


}
