import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { AxIndustryOfferingComponent } from '../../ax-widget/organism/ax-industry-offering/ax-industry-offering.component';
import { AxContactUsComponent } from '../../ax-widget/organism/ax-contact-us/ax-contact-us.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, AxIndustryOfferingComponent, AxContactUsComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
