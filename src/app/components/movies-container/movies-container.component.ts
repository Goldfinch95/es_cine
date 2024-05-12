import { Component, Input } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-movies-container',
  standalone: true,
  imports: [CardsComponent,ModalComponent],
  templateUrl: './movies-container.component.html',
  styleUrl: './movies-container.component.css'
})
export class MoviesContainerComponent {

  @Input() listOfMovies: any;
  
  
}
