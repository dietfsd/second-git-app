import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},

{path:"register",component:RegistrationComponent},
{path:"home",component:HomeComponent},
{path:"search",component:SearchComponent},
{path:"studentList",component:StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
