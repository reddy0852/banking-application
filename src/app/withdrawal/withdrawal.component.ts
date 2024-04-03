import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {
  msg: string = "";
  constructor(public service: ServicesService) { }

  ngOnInit(): void {
  }
  withdraw(form: NgForm) {
    if (form.valid) {
      const accountNo = form.value.accountNo;
      const ifsc = form.value.ifsc;
      const amount = form.value.amount;

      this.service.withdrawAmount(accountNo, ifsc, amount).subscribe((res) => {
        console.log('Withdrawal successful:', res);
        this.msg = "Succesfully sent to another";
      }
      );
    }
  }
}
