import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.scss']
})
export class NewCourseFormComponentComponent implements OnInit {
// A Normal Contol based approach
  // form = new FormGroup({
  //   topics : new FormArray([]),
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   })
  // })

  form;
  constructor(private fb : FormBuilder) {
    //Form Builder Approach
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
   }

  ngOnInit(): void {
  }

  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value))
    topic.value = ''
  }

  removeTopic(topic: AbstractControl){
    const index = this.topics.controls.indexOf(topic);
    if (index >= 0) {
      this.topics.removeAt(index);
    }
  }
  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
