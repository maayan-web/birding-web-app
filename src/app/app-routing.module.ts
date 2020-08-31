import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './birding/home/home.component';
import { ListComponent } from './birding/list/list.component';
import { RegisterComponent } from './birding/register/register.component';


const routes: Routes = [
  {
  path: 'app', children: [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
     { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'register', component: RegisterComponent }
  ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
