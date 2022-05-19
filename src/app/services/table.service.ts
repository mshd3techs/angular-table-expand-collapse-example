import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getBosses() {
    const url = `https://eldenring.fanapis.com/api/bosses?limit=106`;
    return this.http.get<any>(url, {});
  }
}


