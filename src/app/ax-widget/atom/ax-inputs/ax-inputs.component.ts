import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ax-inputs',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './ax-inputs.component.html',
  styleUrl: './ax-inputs.component.scss'
})
export class AxInputsComponent {
  @Input()
  type!: string;
  @Input()
  id!: string;

  @Input()
  iconUrl!: string;
  @Input()
  placeHolder!: string;
  @Input()
  formControlName!: string;
  @Input() Ngclass!: string;
  @Input()
  formData!: FormGroup;
  @Input()
  divClass!: string;
  @Input()
  inputClass!: string;
  @Input() divId!: string;

}
