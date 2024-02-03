import { Component, OnInit, ViewChild } from '@angular/core';
import { FormDataService } from '../../../service/form-data.service';
import { AxContactUsComponent } from '../ax-contact-us/ax-contact-us.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ax-view-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ax-view-data.component.html',
  styleUrl: './ax-view-data.component.scss'
})
export class AxViewDataComponent {
  @ViewChild(AxContactUsComponent) viewdata!: AxContactUsComponent;

  constructor(private formdataval: FormDataService) { }
  datas$ = this.formdataval.Data;

  // ngOnInit(): void {
  //   console.log("inviewchild" + this.viewdata.formvalues)
  //   this.datas = this.viewdata.formvalues
  // }
}
