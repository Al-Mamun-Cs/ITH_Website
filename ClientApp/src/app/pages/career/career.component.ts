import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebsiteCVService } from '../../../app/basic-setup/service/WebsiteCV.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmService } from '../../../app/core/service/confirm.service';
import { SelectedModel } from 'src/app/core/models/selectedModel';
import { AuthService } from 'src/app/core/service/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.sass']
})
export class CareerComponent implements OnInit {

  buttonText: string;
  pageTitle: string;
  destination: string;
  WebsiteCVForm: FormGroup;
  selectedWarehouseList: SelectedModel[];
  selectedSupplierList: SelectedModel[];
  selectedCategoryList: SelectedModel[];
  selectedPaymentStausList: SelectedModel[];
  bankInfoList: SelectedModel[];
  validationErrors: string[] = [];
  role: any;
  branchId: any;
  unitPaymentType: boolean = false;
  options = [];
  filteredOptions: any;
  supplierId: any;

  constructor(
    private snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private authService: AuthService,
    private confirmService: ConfirmService,
    private websiteCVService: WebsiteCVService, 
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
   
    this.intitializeForm();
  }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.role = this.authService.currentUserValue.role.trim();
      this.branchId = this.authService.currentUserValue.branchId.trim();
      console.log(this.role, this.branchId);
    }
  }

  intitializeForm() {
    this.WebsiteCVForm = this.fb.group({
      websiteCVId: [0],
      jobType: [0],
      coverLetter: [""],
      date: [''],
      documentFile: [""],
      doc: [null] 
    });
  }

  onFileChanged(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.WebsiteCVForm.patchValue({
        doc: file
      });
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onSubmit() {
    const rawDate = this.WebsiteCVForm.get('date')?.value;
    if (rawDate) {
      this.WebsiteCVForm.get('date').setValue(new Date(rawDate).toUTCString());
    }
    const formData = new FormData();
    const formValues = this.WebsiteCVForm.value;

    for (const key of Object.keys(formValues)) {
      if (key === 'doc' && formValues[key]) {
        const fileInput = formValues[key];
        if (fileInput.files && fileInput.files.length > 0) {
          formData.append(key, fileInput.files[0]);
        }
      } else {
        formData.append(key, formValues[key]);
      }
    }

    // ৩. সাবমিট করা
    this.websiteCVService.submit(formData).subscribe(response => {
      this.snackBar.open('Information Submit Successfully', '', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: 'snackbar-success'
      });
      this.reloadCurrentRoute();
    }, error => {
      this.validationErrors = error;
    });
  }
}