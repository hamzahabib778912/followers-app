import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // If we want to stay on same page/component and just show different dtaa for each user. (ngoninit only once)
    this.route.paramMap.subscribe((param) => {
      let id = +param.get('id')
      console.log("Your params are: ", id)
    })

    // if we are sure, we will alwyas move out of the page, not stay on it for different params
    let iD = this.route.snapshot.paramMap.get('id');
    console.log("Your params are Fixed: ", iD)
  }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 1,
        order: 'newest'
      }
    })
  }

}
