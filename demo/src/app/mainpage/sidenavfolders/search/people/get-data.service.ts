import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetDataService   {
  private apiUrl = 'http://192.168.0.5/PHP-API/api.php';

  constructor(private http: HttpClient) {}

  searchRecords(filters: any, page: number = 1): Observable<any> {
    const params = new HttpParams({ fromObject: { ...filters, page: page.toString() } });
    return this.http.get<any>(this.apiUrl, { params });
  }
}