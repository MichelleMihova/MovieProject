import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/app-home.component";
import { FilmsComponent } from "./components/films/app-films.component";
import { MovieComponent } from "./components/movie/app-movie.component";
import { LogInComponent } from "./components/logIn/app-logIn.component";
import { UserComponent } from "./components/user/app-user.component";
import { EventsComponent } from "./components/events/app-events.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/films/all', component: FilmsComponent},
  {path: 'home/films/watched', component: FilmsComponent},
  {path: 'home/films/wishlist', component: FilmsComponent},
  {path: 'home/films/movie', component: MovieComponent},
  {path: 'login', component: LogInComponent},
  {path: 'home/user', component: UserComponent},
  {path: 'home/events', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
