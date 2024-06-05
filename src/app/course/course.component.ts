import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses = [{
    id: 1, name: "A"
  },{
    id: 2, name: "B"
  },{
    id: 3, name: "C"
  }]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.courses.push({id:4, name:"D"})
  }

  delete(course : any){
    const index = this.courses.indexOf(course)
    this.courses.splice(index, 1)
  }

}
