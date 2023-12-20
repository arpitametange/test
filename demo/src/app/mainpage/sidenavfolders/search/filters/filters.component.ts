import { Component } from '@angular/core';
import { FilterService } from './filter.service';
import { GetDataService } from '../people/get-data.service';
import { DataFilterService } from 'src/data-filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  industryFilter: string = '';
  jobFunctionFilter: string = '';
  countryFilter: any;
  filters: any = { include_First_Name: '' };

  results: any = [];
  currentPage: number = 1;

  constructor(private apiService: GetDataService, private filterService: FilterService) {}

  ngOnInit(): void {
    this.filters = {};
    this.filterService.filters$.subscribe((filters) => {
      console.log('Filters updated:', filters);
      this.filters = filters;
      this.search();
    });
    
  
    this.search();
  }
  

  search(): void {
    this.apiService.searchRecords(this.filters, this.currentPage).subscribe((data) => {
      this.results = data;
    });
  }
  

  applyFilter(): void {
    this.filterService.updateFilters(this.filters);
  }
  
  
}