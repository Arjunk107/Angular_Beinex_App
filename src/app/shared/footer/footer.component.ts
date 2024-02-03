import { Component } from '@angular/core';
import { AxPlacesComponent } from '../../ax-widget/organism/ax-places/ax-places.component';
import { AxAboutUsComponent } from '../../ax-widget/organism/ax-about-us/ax-about-us.component';
import { AxPolicyFooterComponent } from '../../ax-widget/organism/ax-policy-footer/ax-policy-footer.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AxPlacesComponent, AxAboutUsComponent, AxPolicyFooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
