import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css']
})
export class ChequeComponent implements OnInit {
  constructor(public service: ServicesService) { }
  msg:string="";
  ngOnInit(): void {
  }
  chequeDeposit(form:any){
    this.service.chequeDeposit(form.value).subscribe((res)=>{
      this.msg="Succesfully Registered"
    })
  }

}
