import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
  selector: "app-courses",
  template: `<h2>{{title}}</h2>
     <ul>
       <li *ngFor="let course of courses">
      {{course}}
      </li>
     </ul>
     <img src="{{ imageUrl }}"/>
     <br>
     <button class="btn btn-primary" (click)="onClick()" [class.active]="isActive">
      Save
     </button>
     <input [(ngModel)]="email" (keyup.enter)="onKeyUpTwoWay()" />
     <br>
     {{ text | summary }}
     <br>
     <hr>
     `
})
export class CoursesComponent {
  title = "List of cources";
  courses: any;
  imageUrl = "https://picsum.photos/id/1/200/300"; // Binding
  isActive=false
  public email: string = 'test@gmail.com';
  emailTest = ''
  text = " This is a sample text for Custom pipe usage."

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses();
  }

  onClick(){
    console.log("Button was clicked");
  }

  onKeyUp(){

    // <input #emailTest (keyup.enter)="onKeyUp(emailTest.value)" />

    // the email passed is a template variable
  }

  // Two way binding
  onKeyUpTwoWay(){
    alert(`You have written: ${this.email}`)
    console.log(this.email)
  }

}
