import { Component, OnInit } from '@angular/core';

import { DataService } from './app-data.service';
import { UserService } from './services/user.service';
import { Movie } from './models/Movie';
import { BackendService } from './services/backend.services';
import { Service } from './app.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, UserService, BackendService, Service]
})
export class AppComponent implements OnInit {

  constructor(private username: UserService, private data: DataService, private service: Service) {}

  ngOnInit(){
    // TODO: THIS WILL GET ALL THE MOVIES FOR USER
    // let list2 = [];
    // this.service.getAllMovies().subscribe(res => {
    //   if (res) {
    //     list2 = res;
    //   }
    // }, error => {console.log(error)});


    let list = [
      {
          categorie: "romance",
          actors: ["Mitko","Burzov","Mihaela","koko"],
          director: "Bradley Cooper",
          music: "Bruse Wayne,Jhon Snow",
          title: "lo",
          dateOfCreation: "10/3/2020",
          studio: "o",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          rating: 4.5,
          image: "https://picsum.photos/350/250?image=444",
          trailer: "https://www.youtube.com/embed/x3HbbzHK5Mc",
          duration: 2,
          country: "bg",
          imdbRating: 2,
          language: "bg",
          countryOfShooting: "bg",
          mainActors: ["1","2","3","4"],
          awards: ["a","b","c","d"]
      },
      {
          categorie: "horror",
          actors: ["zuzu","bubu","mimi","koko"],
          director: "Mitko",
          music: "jo",
          title: "lolo",
          dateOfCreation: "10/3/2020",
          studio: "o",
          description: "s",
          rating: 4.5,
          image: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/218843/Maleficent25d48787443c8d.jpg",
          trailer: "https://www.youtube.com/embed/tgbNymZ7vqY",
          duration: 2,
          country: "bg",
          imdbRating: 2,
          language: "bg",
          countryOfShooting: "bg",
          mainActors: ["1","2","3","4"],
          awards: ["a","b","c","d"]
      },
      {
          categorie: "horror",
          actors: ["zuzu","bubu","mimi","koko"],
          director: "Mitko",
          music: "jo",
          title: "om",
          dateOfCreation: "10/3/2020",
          studio: "o",
          description: "s",
          rating: 4.5,
          image: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/218843/Maleficent25d48787443c8d.jpg",
          trailer: "https://www.youtube.com/embed/tgbNymZ7vqY",
          duration: 2,
          country: "bg",
          imdbRating: 2,
          language: "bg",
          countryOfShooting: "bg",
          mainActors: ["1","2","3","4"],
          awards: ["a","b","c","d"]
      },
      {
          categorie: "romance",
          actors: ["Mitko","Burzov","Mihaela","koko"],
          director: "Mitko",
          music: "jo",
          title: "Maleficent",
          dateOfCreation: "10/3/2020",
          studio: "o",
          description: "s",
          rating: 2.5,
          image: "https://picsum.photos/350/250?image=444",
          trailer: "https://www.youtube.com/embed/n0OFH4xpPr4",
          duration: 2,
          country: "bg",
          imdbRating: 2,
          language: "bg",
          countryOfShooting: "bg",
          mainActors: ["1","2","3","4"],
          awards: ["a","b","c","d"]
      },
      {
          categorie: "horror",
          actors: ["zuzu","bubu","mimi","koko"],
          director: "Mitko",
          music: "jo",
          title: "Homealone",
          dateOfCreation: "10/3/2020",
          studio: "o",
          description: "s",
          rating: 4.5,
          image: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/218843/Maleficent25d48787443c8d.jpg",
          trailer: "https://www.youtube.com/embed/n0OFH4xpPr4",
          duration: 2,
          country: "bg",
          imdbRating: 2,
          language: "bg",
          countryOfShooting: "bg",
          mainActors: ["1","2","3","4"],
          awards: ["a","b","c","d"]
      },
      {
          categorie: "асс",
          actors: ["zuzu","bubu","mimi","koko"],
          director: "Mitko",
          music: "jo",
          title: "Hulk",
          dateOfCreation: "10/3/2020",
          studio: "o",
          description: "s",
          rating: 3.7,
          image: "https://static.posters.cz/image/750/%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/hulk-roar-i3313.jpg",
          trailer: "https://www.youtube.com/embed/n0OFH4xpPr4",
          duration: 2,
          country: "bg",
          imdbRating: 2,
          language: "bg",
          countryOfShooting: "bg",
          mainActors: ["1","2","3","4"],
          awards: ["a","b","c","d"]
      },
      {
          categorie: "horror",
          actors: ["zuzu","bubu","mimi","koko"],
          director: "Mitko",
          music: "jo",
          title: "StarWars",
          dateOfCreation: "10/3/2020",
          studio: "o",
          description: "s",
          rating: 5.0,
          image: "https://static.posters.cz/image/750/%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/star-wars-the-last-jedi-one-sheet-i51532.jpg",
          trailer: "https://www.youtube.com/embed/n0OFH4xpPr4",
          duration: 2,
          country: "bg",
          imdbRating: 2,
          language: "bg",
          countryOfShooting: "bg",
          mainActors: ["1","2","3","4"],
          awards: ["a","b","c","d"]
      }
    ];
    this.data.ALLMOVIES.next(list);
  }

  submitLogin(user: string, pass: string) {
    if (user && pass) {
      // TODO make checks for username and password
      this.username.login({user: user, pass: pass}).subscribe(res => {
        const authenticationToken = res.headers.get('x-auth-token');
        this.username.setToken(authenticationToken);
        sessionStorage.setItem('user', user);
      });
    }
  }

  allFilms(){
    this.data.filteredMovies.next(this.data.ALLMOVIES.value);
  }

  watchedFilms(){
    // TODO: This should be used to fill watchedList
    // let watchedList = [];
    // this.service.getWatchedMovies().subscribe(res => {
    //   if (res) {
    //     watchedList = res;
    //   }
    // }, error => {watchedList = []; console.log(error)});

    let watched = Array<Movie>();
    let watchedList = ["Homealone","Hulk"];

    this.data.ALLMOVIES.value.filter(m => {
      if(watchedList.includes(m.title)){
        watched.push(m);
      } 
    });
    this.data.filteredMovies.next(watched);
  }

  wishListFilms(){
    // TODO: This should be used to fill wishList
    // let wishList = [];
    // this.service.getWishListMovies().subscribe(res => {
    //   if (res) {
    //     wishList = res;
    //   }
    // }, error => {watchedList = []; console.log(error)});

    let wish = Array<Movie>();
    let wishList = ["Homealone","Maleficent"];

    this.data.ALLMOVIES.value.filter(m => {
      if(wishList.includes(m.title)){
        wish.push(m);
      } 
    });
    this.data.filteredMovies.next(wish);
  }
}
