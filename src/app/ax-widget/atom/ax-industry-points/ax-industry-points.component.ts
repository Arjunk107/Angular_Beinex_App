import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ax-industry-points',
  standalone: true,
  imports: [],
  templateUrl: './ax-industry-points.component.html',
  styleUrl: './ax-industry-points.component.scss'
})
export class AxIndustryPointsComponent {
  @Input() iconUrl!: String;
  @Input() data!: String;

}
