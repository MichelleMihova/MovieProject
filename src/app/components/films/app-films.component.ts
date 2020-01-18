import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { DataService } from '../../app-data.service';

@Component({
  selector: 'app-films',
  templateUrl: './app-films.component.html',
  styleUrls: ['./app-films.component.css']
})
export class FilmsComponent implements OnInit{

    movies: Movie[];


    constructor(private data: DataService){
        
    }

    ngOnInit() {
        console.log("Mirtko app-films");

        this.data.filteredMovies.subscribe(res => {
            this.movies = res;
            console.log(res);
        })
    }

    selectMovie(title: string){
        let res = this.data.ALLMOVIES.value.filter((t) => {
            return t.title == title;
        });
        console.log(res[0]);
        console.log(this.data.MOVIE);

        this.data.MOVIE.next(res[0]);
    }
}

// var s = {
//     categorie: "romance",
//     actors: ["Mitko","Burzov","Mihaela","koko"],
//     director: "Mitko",
//     music: "jo",
//     title: "lo",
//     dateOfCreation: 10/3/2020,
//     studio: "o",
//     description: "s",
//     rating: 4.5,
//     image: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/218843/Maleficent25d48787443c8d.jpg",
//     trailer: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/218843/Maleficent25d48787443c8d.jpg",
//     duration: 2,
//     country: "bg",
//     imdbRating: 2,
//     language: "bg",
//     countryOfShooting: "bg",
//     mainActors: ["1","2","3","4"],
//     awards: ["a","b","c","d"]
// }