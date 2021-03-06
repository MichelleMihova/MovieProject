import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './models/Movie';

@Injectable()
export class DataService {
  public MOVIE: BehaviorSubject<Movie> = new BehaviorSubject(null);   
  public ALLMOVIES: BehaviorSubject<Movie[]> = new BehaviorSubject(null);
  public filteredMovies: BehaviorSubject<Movie[]> = new BehaviorSubject(null);

  
}