import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { ModalComponent } from '../modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies-container',
  standalone: true,
  imports: [CardsComponent,ModalComponent, FontAwesomeModule],
  templateUrl: './movies-container.component.html',
  styleUrl: './movies-container.component.css'
})
export class MoviesContainerComponent {

  arrowRight = faArrowRight;
  arrowLeft = faArrowLeft;

  @Input() listOfMovies: any;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  page: number = 1;

  backwardClick(){
    if(this.page === 1){
       this.page = 1;
    }
    else{
       this.page--
       this.pageChange.emit(this.page);
    }
  }
  
  fowardClick(){
    this.page++
    this.pageChange.emit(this.page);
  }
}
