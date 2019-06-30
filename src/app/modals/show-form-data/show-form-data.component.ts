import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-show-form-data',
  templateUrl: './show-form-data.component.html',
  styleUrls: ['./show-form-data.component.css']
})
export class ShowFormDataComponent implements OnInit {
  formData : any = ''  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ShowFormDataComponent>) {}

    
  
  
   

  ngOnInit() {
    this.formData = this.data.dataKey
    console.log("path", this.formData)

    for (const field in this.formData.controls){
      const control = this.formData.get(field);
      console.log("control", control.value);
    }
  }

}
