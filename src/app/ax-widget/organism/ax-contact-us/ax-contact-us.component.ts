import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder, ReactiveFormsModule, UntypedFormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AxInputsComponent } from '../../atom/ax-inputs/ax-inputs.component';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../../../service/form-data.service';
import { Router } from '@angular/router';
import { AxScheduleCallComponent } from '../../atom/ax-schedule-call/ax-schedule-call.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ax-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AxInputsComponent, CommonModule, AxScheduleCallComponent],
  templateUrl: './ax-contact-us.component.html',
  styleUrl: './ax-contact-us.component.scss'
})

export class AxContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private dataform: FormDataService, private router: Router) { }
  submitted: any = false;
  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      phnumber: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
      country: ['', Validators.required],
      message: ['', Validators.required],
      // lookingfor: new FormControl(''),
      project: ['', Validators.required],
      file: ['', Validators.required],
      // filesource: new FormControl(null)
    })
  }


  submit() {

    this.submitted = true;

    if (this.contactForm.invalid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      return;
    }
    else {
      Swal.fire("SuccessFul");
      console.log(this.contactForm.value)
      this.dataform.setFormData(this.contactForm.value)
      this.router.navigate(['view'])
    }

  }
  classname = 'contactus__right__lookingtag';
  classname1 = 'contactus__right__lookingtag';
  classname2 = 'contactus__right__lookingtag';
  classname3 = 'contactus__right__lookingtag';
  classname4 = 'contactus__right__lookingtag';

  formvalues = this.contactForm;
  styleChange() {
    this.classname = 'contactus__right__lookingtag contactus__right--lookingtags'
  }
  styleChange1() {
    this.classname1 = 'contactus__right__lookingtag contactus__right--lookingtags'
  }
  styleChange2() {
    this.classname2 = 'contactus__right__lookingtag contactus__right--lookingtags'
  }
  styleChange3() {
    this.classname3 = 'contactus__right__lookingtag contactus__right--lookingtags'
  }
  styleChange4() {
    this.classname4 = 'contactus__right__lookingtag contactus__right--lookingtags'
  }
}
