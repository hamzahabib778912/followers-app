import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { CourseComponent } from './course/course.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { ZippyComponent } from './zippy/zippy.component';
import { AuthorsComponent } from './authors/authors.component';
import { LikeComponent } from './like/like.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersService } from './services/github-followers.service';
import { AuthorsService } from './authors.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
    CourseComponent,
    SummaryPipe,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponentComponent,
    PostsComponent,
    ZippyComponent,
    AuthorsComponent,
    LikeComponent,
    ChangePasswordComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '', component: HomeComponent},
     { path: 'followers', component: GithubFollowersComponent},
     { path: 'followers/:id/:username', component: GithubProfileComponent},
     { path: 'posts', component: PostsComponent},
     { path: '**', component: NotFoundComponent},
    ])
  ],
  providers: [CoursesService,
     PostService,
     AuthorsService,
    GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
