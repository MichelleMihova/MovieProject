import { Injectable } from '@angular/core';
import { BackendService } from './services/backend.services';

@Injectable()
export class Service {   
    constructor(private backend: BackendService){}

    getAllMovies() {
        return this.backend.get('/movies/all')
    }

    getWatchedMovies() {
        return this.backend.get('/movies/watchedlist');
    }

    getWishListMovies() {
        return this.backend.get('/movies/wishlist')
    }

    getLastThreeMovies() {
        return this.backend.get('/movies/lastthree')
    }
}