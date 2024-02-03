import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AxScheduleCallComponent } from './ax-widget/atom/ax-schedule-call/ax-schedule-call.component';
import { HeaderComponent } from './shared/header/header.component';
import { AxMediaIconsComponent } from './ax-widget/atom/ax-media-icons/ax-media-icons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './layouts/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AxScheduleCallComponent, HeaderComponent, AxMediaIconsComponent, ReactiveFormsModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'beinex-app';
}
