import { Component, OnInit, } from '@angular/core';
import { EventDataService } from '../../service/event-data.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {

  event_data: any;
  private _searchTerm : string
  public filteredEvents : any
  public startServerMessage : boolean

  constructor(public event_service: EventDataService, private _router: Router,) {
  this.event_service.getEventDetails().subscribe(data =>{
    this.event_data = data;
    this.filteredEvents = data
  })
  }
 
get searchTerm():string {
  return this._searchTerm;

}
set searchTerm(value:string){
  this._searchTerm = value;
  this.filteredEvents = this.filterEvents(value)
  console.log("")
}
filterEvents(searchString : string){
  if(this.event_data){
  return this.event_data.filter(data =>
     data.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)

  }

}
book_event(id){
  let selectedId = this.event_data.filter(data => {
    if(data.id === id)
    return data.seats
  })
  let queryParams = {
    availableSeats: selectedId[0].seats,
    name: selectedId[0].name,
}
 this._router.navigate(['/book-event'], { queryParams: queryParams }) 
}
  ngOnInit() {
    setTimeout(() => {
       this.startServerMessage=true }, 2000);
  }

}
