export interface Bank {
    accountNo: number;
    name: string;
    ifsc: number;
    amount: number;
}
export class ChequeDepositRequest {
    constructor(
      public fromAccountNo: number,
      public fromIfsc: number,
      public toAccountNo: number,
      public toIfsc: number,
      public amount: number
    ) {}
  }
