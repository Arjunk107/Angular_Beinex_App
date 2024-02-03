import { Routes } from '@angular/router';
import { HomePageComponent } from './layouts/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        loadChildren:
            () => import('./layouts/home-page/home-page.module').then((m: typeof import('./layouts/home-page/home-page.module')) => m.HomePageModule)
    }
];
