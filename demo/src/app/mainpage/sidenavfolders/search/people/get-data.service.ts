import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getAllData(page: number, size: number, jobTitles: string[]) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('jobTitles', jobTitles.join(',')); // Convert array to comma-separated string

    return this.http.get(`${this.apiUrl}/api/all`, { params });
  }
  getdata(){
    return this.http.get(`${this.apiUrl}/api/all`)
  }
}