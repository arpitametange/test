import { Route, Router } from '@angular/router';
import { GetDataService } from '../get-data.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChangeDetectionStrategy } from '@angular/core';
import * as XLSX from 'xlsx';

import saveAs from 'file-saver';
import * as FileSaver from 'file-saver';
import { DataFilterService } from 'src/data-filter.service';
import { FilterService } from '../../filters/filter.service';
@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  filters: any = {};
  results: any = [];
  currentPage: number = 1;
  loading = true; 
  constructor(private apiService: GetDataService, private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.filters$.subscribe((filters) => {
      this.filters = filters;
      this.search();
    });

    this.search();
  }

  search(): void {
    // Set loading to true when starting a new search
    this.loading = true;
  
    this.apiService.searchRecords(this.filters, this.currentPage).subscribe((data) => {
      this.results = data;
  
      // Set loading to false after data is loaded
      this.loading = false;
    });
  }
  

  goToPage(page: number): void {
    if (page >= 1 && page <= this.results.total_pages) {
      this.currentPage = page;
      this.search();
    }
  }

}
