import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MoviesContainerComponent } from '../../components/movies-container/movies-container.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { TrendsComponent } from './components/trends/trends.component';
import { Movie } from '../../interfaces/movies';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SearchContainerComponent,TrendsComponent,MoviesContainerComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //datos de la api
  serverUrl: string = 'https://api.themoviedb.org/3';
  moviesPage: number = 1;
  movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  handlePageChange(event: number) {
    this.moviesPage = event;
    this.fetchMovies();
  }

  ngOnInit(): void {
    this.fetchMovies();
  }

  async fetchMovies(): Promise<void> {
    //key y authorization
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGI3ZjE3M2IzMmY4MmY3MDQxYzgwOGYyODBlN2VlZiIsInN1YiI6IjY2Mzc1Yjc4MGMxMjU1MDEyNjdkNjFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6A073IM_dNOQrhlAzYHNgH1KyTfPRQY6Uc6vTDJUXUI'
      }
    }; 
    //pegada a la api
    try {
      const response = await lastValueFrom(this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing', {
        //parametros
        params: {
          api_key: '50b7f173b32f82f7041c808f280e7eef',
          language: 'es-ES',
          page: this.moviesPage
        },
        ...options
      }));
      //resultados almacenados
      this.movies = response.results;
      console.log(this.movies)
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  }

  
}




