import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Bank } from '../shared/bank.model';

@Component({
  selector: 'app-balance-enq',
  templateUrl: './balance-enq.component.html',
  styleUrls: ['./balance-enq.component.css']
})
export class BalanceEnqComponent implements OnInit {
  balanceEnquiry(arg0: any) {
    throw new Error('Method not implemented.');
  }
  balance: Bank | undefined;
  constructor(public service: ServicesService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.service.fetchBalance(form.value.accountNo, form.value.ifsc).subscribe((res)=>{
      //this.balance = res;
    })
  }
}
