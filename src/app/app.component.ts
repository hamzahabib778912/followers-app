import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My test Angular APP';
  courses = ['A', 'B', 'C'];

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  onFavoriteChange(event: { newValue: boolean }) {
    console.log('Favorite changed:', event.newValue);
    // Additional logic here
  }
}
