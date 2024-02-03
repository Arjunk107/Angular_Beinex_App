import { Component } from '@angular/core';
import { AxIndustryPointsComponent } from '../../atom/ax-industry-points/ax-industry-points.component';
import { AxScheduleCallComponent } from '../../atom/ax-schedule-call/ax-schedule-call.component';

@Component({
  selector: 'app-ax-industry-offering',
  standalone: true,
  imports: [AxIndustryPointsComponent, AxScheduleCallComponent],
  templateUrl: './ax-industry-offering.component.html',
  styleUrl: './ax-industry-offering.component.scss'
})
export class AxIndustryOfferingComponent {

}
