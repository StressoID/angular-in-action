import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {

  public myForm: FormGroup;
  public builderForm: FormGroup;

  public data: any[] = [];
  public value: string;

  constructor(private orders: OrdersService, private fb: FormBuilder) {
    this.myForm = new FormGroup({
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });

    this.builderForm = this.fb.group({
      myControl: new FormControl('test', Validators.required),
      mySuperControl: new FormControl(),
    });
  }

  ngOnInit() {
    this.myForm.controls.confirmPassword.setValidators(this.comparePasswords.bind(this));
  }

  public comparePasswords(confirmPassword: FormControl) {
      return this.myForm.controls.password.value === confirmPassword.value ? null : { passwordValid: true };
  }

  public setData() {
    this.orders.getOrderById(this.value).subscribe(result => {
      this.data = [result];
    });
  }

  public submit() {
    console.log(this.myForm);
    console.log(this.builderForm);
  }

}
