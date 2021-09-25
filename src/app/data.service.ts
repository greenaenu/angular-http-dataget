import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get(
        'https://raw.githubusercontent.com/NablaT/test-api/master/assets/messages.json.txt'
      )
      .pipe(map((response) => response));
  }
}
