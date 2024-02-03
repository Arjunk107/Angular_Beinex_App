import { Component } from '@angular/core';
import { AxMediaIconsComponent } from '../../ax-widget/atom/ax-media-icons/ax-media-icons.component';
import { AxScheduleCallComponent } from '../../ax-widget/atom/ax-schedule-call/ax-schedule-call.component';
import { AxTrailsComponent } from '../../ax-widget/atom/ax-trails/ax-trails.component';
import { AxEnglishIconComponent } from '../../ax-widget/atom/ax-english-icon/ax-english-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AxMediaIconsComponent, AxScheduleCallComponent, AxTrailsComponent, AxEnglishIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
