import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ax-schedule-call',
  standalone: true,
  imports: [],
  templateUrl: './ax-schedule-call.component.html',
  styleUrl: './ax-schedule-call.component.scss'
})
export class AxScheduleCallComponent {
  @Input()
  value!: string;
  @Input() imgUrl!: string;
  @Input() class!: string;
  @Input() btnClass!: string;
  @Input() divclass!: string;
}
