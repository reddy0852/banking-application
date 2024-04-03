import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  msg:string="";
  constructor(public service: ServicesService) { }

  ngOnInit(): void {
  }
  deposit(form: NgForm) {
    if (form.valid) {
      const accountNo = form.value.accountNo;
      const ifsc = form.value.ifsc;
      const amount = form.value.amount;

      this.service.depositAmount(accountNo, ifsc, amount).subscribe((response: any) => {
          console.log('Deposit successful:', response.data);
          this.msg = "Succesfully deposited"+response.data
        }
      );
    }
  }
}
