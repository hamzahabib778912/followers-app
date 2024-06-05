import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

export interface Post {
  body?: string,
  id?: number,
  title?: string,
  userId?: number,
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private service : PostService ) {}

  ngOnInit(): void {
   this.service.getAll().subscribe((response) => {
      // console.log("Response from API is: ", response)
      this.posts = response
    }, (error) => {
      alert('Something wrong happened')
    })
  }

   createPost(title : HTMLInputElement){
    let post: Post = {
      title: title.value
    }
      this.service.create(post).subscribe((response : Post) => {
          post.id = response.id
          this.posts.splice(0,0,post)
      }, (error) => {
        alert('Something wrong happened')
      })
   }



   updatePost(post){
    let obj = {isRead: true}
      this.service.update(obj).subscribe((response : Post) => {
        console.log("Updated post: ", response);
        alert(`The post ${post.title} has been updated`)
      }, (error) => {
        alert('Something wrong happened')
      })
   }



   deletePost(post){
      this.service.delete(post).subscribe((response) => {
        console.log("Updated post: ", response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1)
      }, (error) => {
        alert('Something wrong happened')
      })
   }


}
