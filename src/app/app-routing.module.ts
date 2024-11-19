import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
{path:'',redirectTo:'/dashboard',pathMatch:'full'},
{path:'movies',component:MovieComponent},
{path:'dashboard',component:DashboardComponent},
{path:'detail/:id',component:MovieDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
