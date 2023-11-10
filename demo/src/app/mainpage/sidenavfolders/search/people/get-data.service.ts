import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllData(
    page: number,
    size: number,
    nameFilter?: string
  ): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (nameFilter) {
      params = params.set('Country', nameFilter);
    }

    return this.http.get(`${this.apiUrl}/api/all`, { params });
  }

  getListOfCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/all?Country`);
  }
}