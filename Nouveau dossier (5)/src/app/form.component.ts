import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sample-reactive-form',
  templateUrl: './sample-reactive-form.component.html',
  styleUrls: ['./sample-reactive-form.component.css']
})

export class SampleReactiveFormComponent
{

  payLoad: any;
  FormData: any;
  DataForm: FormGroup = new FormGroup({});

  constructor()
  {
    this.FormData = [{
      name:'a'
    },{
      name:'b'
    }]

    this.DataForm = this.generateFormControls(this.FormData);
 }

    generateFormControls(formData: any)
    {
        let tempGroup: FormGroup = new FormGroup({});
        formData.forEach(i=>{
            tempGroup.addControl(i.name, new FormControl(''))
        })
        return tempGroup;
    }

    PreviewData() 
    {
         this.payLoad = JSON.stringify(this.DataForm.value);
    }
}