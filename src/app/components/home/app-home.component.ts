import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Movie } from "../../models/Movie";
import { Service } from 'src/app/app.services';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  lastMovies: Movie[] = [];
  sliderNum: number = 0;

  constructor(private service: Service) {}

  ngOnInit() {
    console.log("Mirtko");
    document.getElementById('navBar').classList.remove('hidden');

    // TODO: THIS WILL GET THE LAST THREE ADDED MOVIES
    // this.service.getLastThreeMovies().subscribe( res => {
    //   if (res) {
    //     this.lastMovies = res;
    //   }
    // }, error => {console.log(error)});

    // this.lastMovies = [
    //   {
    //     categorie: "romance",
    //     actors: ["Elsa", "Anna", "Olaf", "Kristoff", "Oaken"],
    //     director: "Bradley Cooper",
    //     music: "Bruse Wayne,Jhon Snow",
    //     title: "Frozen",
    //     dateOfCreation: "10/3/2020",
    //     studio: "omung",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     rating: 4.5,
    //     image: "https://picsum.photos/350/250?image=444",
    //     trailer: "https://www.youtube.com/embed/x3HbbzHK5Mc",
    //     duration: 2,
    //     country: "bg",
    //     imdbRating: 4,
    //     language: "bg",
    //     countryOfShooting: "bg",
    //     mainActors: ["1","2","3","4"],
    //     awards: ["a","b","c","d"]
    //   },
    //   {
    //     categorie: "horror",
    //     actors: ["Vin Disel","Selena Gomez"],
    //     director: "Mitko",
    //     music: "jo",
    //     title: "Bloodshot",
    //     dateOfCreation: "10/3/2020",
    //     studio: "o",
    //     description: "s",
    //     rating: 4.5,
    //     image: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/218843/Maleficent25d48787443c8d.jpg",
    //     trailer: "https://www.youtube.com/embed/tgbNymZ7vqY",
    //     duration: 2,
    //     country: "bg",
    //     imdbRating: 2,
    //     language: "bg",
    //     countryOfShooting: "bg",
    //     mainActors: ["1","2","3","4"],
    //     awards: ["a","b","c","d"]
    //   },
    //   {
    //     categorie: "trailer",
    //     actors: ["Vin Disel","Selena Gomez"],
    //     director: "Mitko",
    //     music: "jo",
    //     title: "Bad Boys for life",
    //     dateOfCreation: "10/3/2020",
    //     studio: "o",
    //     description: "s",
    //     rating: 4.5,
    //     image: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/218843/Maleficent25d48787443c8d.jpg",
    //     trailer: "https://www.youtube.com/embed/tgbNymZ7vqY",
    //     duration: 2,
    //     country: "bg",
    //     imdbRating: 2,
    //     language: "bg",
    //     countryOfShooting: "bg",
    //     mainActors: ["1","2","3","4"],
    //     awards: ["a","b","c","d"]
    // }];
  }

  ngAfterViewInit() {
    this.displaySlider();
  }

  displaySlider() {
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');

    for (let i = 0; i < slides.length; i++) {
      if (i == this.sliderNum) {
        slides[i].classList.remove('hideSlide');
      } else {
        slides[i].classList.add('hideSlide');
      }
    }

    for (let i = 0; i < dots.length; i++) {
      if (i == this.sliderNum) {
        dots[i].classList.add('dotColor');
      } else {
        dots[i].classList.remove('dotColor');
      }
    }
  }

  plusSlides(side: number) {
    this.sliderNum += side;
    if (this.sliderNum < 0) this.sliderNum = 0;
    if (this.sliderNum > 2) this.sliderNum = 2;
    this.displaySlider();
  }

  currentSlide(slide: number) {
    this.sliderNum = slide;
    this.displaySlider();
  }
}