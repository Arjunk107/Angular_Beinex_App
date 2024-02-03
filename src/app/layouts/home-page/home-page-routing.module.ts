import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AxContactUsComponent } from '../../ax-widget/organism/ax-contact-us/ax-contact-us.component';
import { AxViewDataComponent } from '../../ax-widget/organism/ax-view-data/ax-view-data.component';

const routes: Routes = [
  {
    path: '',
    component: AxContactUsComponent
  },
  {
    path: 'view',
    component: AxViewDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
