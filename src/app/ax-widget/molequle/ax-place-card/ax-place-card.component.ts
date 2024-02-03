import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ax-place-card',
  standalone: true,
  imports: [],
  templateUrl: './ax-place-card.component.html',
  styleUrl: './ax-place-card.component.scss'
})
export class AxPlaceCardComponent {
  @Input() imageUrl!: String;
  @Input() heading!: String;
  @Input() address!: String;
  @Input() phone!: String;
  @Input() mobile!: String;
  @Input() email!: String;
}
