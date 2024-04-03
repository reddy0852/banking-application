import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bank, ChequeDepositRequest } from '../shared/bank.model';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url:string = "http://localhost:8181/"
  constructor(private http: HttpClient) { }

  postRegister(bank:Bank){
    return this.http.post(this.url+"register",bank);
  }
  fetchBalance(accountNo: number, ifsc: number) {
    return this.http.get(this.url+`/fetchBalance/${accountNo}/${ifsc}`)
  }
  chequeDeposit(request: ChequeDepositRequest){
    return this.http.post(this.url + "chequeDeposit", request);
  }
  depositAmount(accountNo: number, ifsc: number, amount: number){
    return this.http.post(`${this.url}deposit/${accountNo}/${ifsc}/${amount}`, {});
  }
  withdrawAmount(accountNo: number, ifsc: number, amount: number) {
    return this.http.post(`${this.url}withdrawal/${accountNo}/${ifsc}/${amount}`, {});
  }
}



