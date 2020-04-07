import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegpageComponent } from './regpage/regpage.component';
import { LogindailogComponent } from './logindailog/logindailog.component';



const routes: Routes = [
  {path: 'regpage', component: RegpageComponent},
  {path: '/login', component: LogindailogComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
