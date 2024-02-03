import { Component } from '@angular/core';
import { AxPlaceCardComponent } from '../../molequle/ax-place-card/ax-place-card.component';
import { AxSubscribersetComponent } from '../../molequle/ax-subscriberset/ax-subscriberset.component';

@Component({
  selector: 'app-ax-places',
  standalone: true,
  imports: [AxPlaceCardComponent, AxSubscribersetComponent],
  templateUrl: './ax-places.component.html',
  styleUrl: './ax-places.component.scss'
})
export class AxPlacesComponent {

}
