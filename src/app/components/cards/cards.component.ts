import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() movieData: any;
  @Input() index:any;


  shortenDescription(movieData: string){
    if (movieData.length >= 300) {
     const cut = movieData.substring(0, 300).lastIndexOf(' ');
     return movieData.substring( 0, cut) + '...';
    }
    else{
      return movieData
    }
  }
}
