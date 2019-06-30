import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  constructor(private http: HttpClient) { }
  

getEventDetails()   {
 return this.http.get('http://localhost:3000/eventDetails')

}

}
