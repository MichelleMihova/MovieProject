import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/app-home.component';
import { FilmsComponent } from './components/films/app-films.component';
import { MovieComponent } from './components/movie/app-movie.component';
import { LogInComponent } from './components/logIn/app-logIn.component';
import { EventsComponent } from './components/events/app-events.component';
import { UserComponent } from './components/user/app-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    MovieComponent,
    LogInComponent,
    EventsComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule ,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
