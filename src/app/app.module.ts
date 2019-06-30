import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EventListingComponent } from './pages-components/event-listing/event-listing.component';
import { EventBookingComponent } from './pages-components/event-booking/event-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule,MatInputModule,MatSelectModule, MatDialogModule} from '@angular/material';
import { ShowFormDataComponent } from './modals/show-form-data/show-form-data.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListingComponent,
    EventBookingComponent,
    ShowFormDataComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatSelectModule, MatDialogModule

  ],
  entryComponents: [ShowFormDataComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
