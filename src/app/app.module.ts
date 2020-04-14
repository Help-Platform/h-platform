import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegpageComponent } from './regpage/regpage.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenubarComponent } from './menubar/menubar.component';
import { RightcontentComponent } from './rightcontent/rightcontent.component';
import { LeftcontentComponent } from './leftcontent/leftcontent.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegpageComponent,
    FooterComponent,
    ContentComponent,
    MenubarComponent,
    RightcontentComponent,
    LeftcontentComponent,
    LoginComponent,
    AboutComponent,
    PostsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
