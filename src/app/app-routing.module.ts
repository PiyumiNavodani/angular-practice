import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { HomeComponent } from './employee/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // pathMatch: 'full'
  },
{
  path:'create-employee',
  component: CreateEmployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
