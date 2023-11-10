import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from './get-data.service';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PeopleComponent {
  jobname = [1, 23, 34, 4, 5, 3];
  dataList: any;
  allData: any;
  currentPage: number = 0;
  pageSize: number = 100;
  jobTitles: string[] = [];
  locationFilter: string = '';
  countries$: any = [];
  countryFilter: string = '';
  nameFilter: any = '';

  constructor(private route: ActivatedRoute, private router: Router, private service: GetDataService) {}

  ngOnInit(): void {
    this.countries$ = this.service.getListOfCountries();
    this.loadData();
  }

  loadData() {
    this.service
      .getAllData(
        this.currentPage,
        this.pageSize,
        this.nameFilter
      )
      .subscribe(
        (res: any) => {
          console.log('Response:', res);
          this.dataList = res;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
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
    this.currentPage = 0;
    this.loadData();
  }

  applyFilters() {
    this.currentPage = 0;
    this.loadData();
  }
}
