import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path:'',redirectTo:'/dashboard',pathMatch:'full'},
{path:'movies',component:MovieComponent},
{path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
