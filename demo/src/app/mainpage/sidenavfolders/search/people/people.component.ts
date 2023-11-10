import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  jobname=[1,23,34,4,5,3]
  dataList:any
  allData:any
  currentPage: number = 0;
  pageSize: number = 10;
  jobTitles: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private service: GetDataService) {
    this.service.getdata().subscribe((res)=>{
      console.log(res,'data in constructor');
      this.allData=res
      })
   }

  ngOnInit(): void {
    this.loadData();
  }



  // pagination code
  loadData() {
    this.service.getAllData(this.currentPage, this.pageSize, this.jobTitles).subscribe((res: any) => {
      console.log(res, "Get all data");
      this.dataList = res; 
    });
  }

  isPeopleRoute(): boolean {
    const segments: string[] = this.router.url.split('/');
    return segments.includes('left');
  }

  nextPage() {
    this.currentPage++;
    this.loadData();
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadData();
    }
  }

  onJobTitleChange(selectedJobTitles: string[]) {
    this.jobTitles = selectedJobTitles;
    this.currentPage = 0; // Reset to first page when filter changes
    this.loadData();
  }




// filter components ts
// jobname=[1,23,34,4,5,3]
//   allData:any
//   constructor(private service: GetDataService){
// this.service.getdata().subscribe((res)=>{
// console.log(res,'data in constructor');
// this.allData=res
// })
//   }



  
}