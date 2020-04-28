import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegpageComponent } from './regpage/regpage.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersdailogComponent } from './usersdailog/usersdailog.component';





const routes: Routes = [
  {path: 'regpage', component: RegpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'home', component: NavbarComponent},
  {path: 'users', component: UsersdailogComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
