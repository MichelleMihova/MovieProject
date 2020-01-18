import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TweenMax, Sine } from 'gsap'

import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-logIn',
  templateUrl: './app-logIn.component.html',
  styleUrls: ['./app-logIn.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private app: AppComponent){}

  ngOnInit() {
    document.getElementById('navBar').style.display = 'none';
  }

  login() {
    let user = document.getElementById('username').innerHTML;
    let pass = document.getElementById('password').innerHTML;
    this.app.submitLogin(user, pass);
  }


 showLoginForm(){
    $('#login-button').fadeOut("slow",function(){
      $("#container").fadeIn();
      TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
      TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
    });
  };
  //$(".close-btn").click(function
 closeBtn(){
    TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container, #forgotten-container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
    });
  };
  
closeSignUpBtn(){
    TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container, #signup-container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
    });
  };

  /* Forgotten Password */
  //$('#forgotten').click(function()
   forgottenPass(){
    $("#container").fadeOut(function(){
      $("#forgotten-container").fadeIn();
    });
  };

   showSignupForm(){
    $("#container").fadeOut("slow",function(){
      $("#signup-container").fadeIn();
    });
  };
}