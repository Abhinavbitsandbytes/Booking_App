import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowFormDataComponent } from '../../modals/show-form-data/show-form-data.component';
import { MatDialog, } from '@angular/material';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent implements OnInit {

  public eventName: any
  public availableSeats: any
  public seatsUnavailableMessage: any
  public isTicketBooked: boolean
  bookingForm: FormGroup;
  seatMap = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
  }


  constructor(private matDialog: MatDialog, private route: ActivatedRoute, private _router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['name'] && params['availableSeats']){
      this.eventName = params['name'];
      this.availableSeats = params['availableSeats'];
      }
      else
      this._router.navigate([''])
    });
    this.bookingForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      mobile_no: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      seats: ['', [Validators.required, Validators.max(this.availableSeats)]],
      attendee2: [''],
      attendee3: [''],
      attendee4: [''],
      attendee5: [''],
      attendee6: [''],
    });
  }

  getErrrorMessage(fieldName) {
    if (fieldName == 'email') {
      if (this.bookingForm.get('email').hasError) {
        if (this.bookingForm.get('email').errors.pattern) {
          return "Invalid email"
        }
        else if (this.bookingForm.get('email').errors.required) {
          return "Please enter your email"
        }
      }
    }
    else if (fieldName == 'name') {
      if (this.bookingForm.get('name').hasError) {
        if (this.bookingForm.get('name').errors.pattern) {
          return "Only letters and spaces are allowed"
        }
        else if (this.bookingForm.get('name').errors.required) {
          return "Please enter your name"
        }
      }
    }
    else if (fieldName == 'seats') {
      if (this.bookingForm.get('seats').hasError) {
        if (this.bookingForm.get('seats').errors.max) {
          return "Number of seats selected is more than available seats"
        }
        else if (this.bookingForm.get('seats').errors.required) {
          return "Please enter number of seats"
        }

      }
    }

  }
  onCancel() {
    this._router.navigate([""])
  }
  onSubmit() {
    for (const field in this.bookingForm.controls) {
      const control = this.bookingForm.get(field);
      control.markAsTouched();
    }
    console.log(this.bookingForm);


    if (this.bookingForm.valid) {

      this.isTicketBooked = true

      let matSigninDialog = this.matDialog.open(ShowFormDataComponent, {
        width: '800px',
        data: {
          dataKey: this.bookingForm
        }
      });
    }
  }
}


