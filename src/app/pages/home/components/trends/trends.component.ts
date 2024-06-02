import { Component } from '@angular/core';
import { CarrouselComponent } from '../carrousel/carrousel.component';

@Component({
  selector: 'app-trends',
  standalone: true,
  imports: [CarrouselComponent],
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.css'
})
export class TrendsComponent {

}
