import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { DataService } from '../../app-data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './app-movie.component.html',
  styleUrls: ['./app-movie.component.css']
})



export class MovieComponent implements OnInit, AfterViewInit {

    public movie: Movie; //suzdadohme promenliva
    

    constructor(private data: DataService){

    }
    
    // @ViewChild('videoPlayer',{static:false}) 
    // videoplayer: ElementRef;
    // toggleVideo(event:any){
    //   this.videoplayer.nativeElement.play();
    // }

    ngOnInit() {
        this.data.MOVIE.subscribe(res => {
          this.movie = res;
          console.log("mirtki");
        });
    }

    ngAfterViewInit() {
      let s = new StarRating();
      s.init();
    }


  
}

class StarRating {
    /**
   * Star rating class
   * @constructor
   */
  StarRating() {
    this.init();
  };

  /**
   * Initialize
   */
  init = function() {
    console.log("asdasd");
    this.stars = document.querySelectorAll('#rating div');
    for (var i = 0; i < this.stars.length; i++) {
      this.stars[i].setAttribute('data-count', i);
      this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
    }
    document.querySelector('#rating').addEventListener('mouseleave', this.leaveStarListener.bind(this));
  };

  /**
   * This method is fired when a user hovers over a single star
   * @param e
   */
  enterStarListener = function(e) {
    this.fillStarsUpToElement(e.target);
  };

  /**
   * This method is fired when the user leaves the #rating element, effectively removing all hover states.
   */
  leaveStarListener = function() {
    this.fillStarsUpToElement(null);
  };

  /**
   * Fill the star ratings up to a specific position.
   * @param el
   */
  fillStarsUpToElement = function(el) {
    // Remove all hover states:
    for (var i = 0; i < this.stars.length; i++) {
      if (el == null || this.stars[i].getAttribute('data-count') > el.getAttribute('data-count')) {
        this.stars[i].classList.remove('hover');
      } else {
        this.stars[i].classList.add('hover');
      }
    }
  };
}