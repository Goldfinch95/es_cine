import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Movie } from '../../../../interfaces/movies';


@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {

  //datos de la api
  serverUrl = "https://api.themoviedb.org/3"
  trends: Movie[] = [];
  page = 1;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.fetchTrends();
  }

  async fetchTrends(): Promise<void> {
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
          page: this.page
        },
        ...options
      }));
      //resultados almacenados
      this.trends = response.results;
      console.log(this.trends)
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  }
}
