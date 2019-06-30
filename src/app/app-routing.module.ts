import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventBookingComponent } from './pages-components/event-booking/event-booking.component';
import { EventListingComponent } from './pages-components/event-listing/event-listing.component'

const routes: Routes = [
  {
    path : '',
    component : EventListingComponent,
},
{
    path : 'book-event',
    component : EventBookingComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
