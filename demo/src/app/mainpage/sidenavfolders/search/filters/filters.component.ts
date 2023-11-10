import { Component } from '@angular/core';
import { GetDataService } from '../people/get-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  jobname=[1,23,34,4,5,3]
  allData:any
  constructor(private service: GetDataService){
this.service.getdata().subscribe((res)=>{
console.log(res,'data in constructor');
this.allData=res
})
  }




}
