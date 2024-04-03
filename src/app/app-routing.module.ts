import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepositComponent } from './deposit/deposit.component';
import { ChequeComponent } from './cheque/cheque.component';
import { BalanceEnqComponent } from './balance-enq/balance-enq.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'deposit',
    component: DepositComponent
  },
  {
    path: 'cheque',
    component: ChequeComponent
  },
  {
    path: 'balance-enquiry',
    component: BalanceEnqComponent
  },
  {
    path: 'withdrawal',
    component: WithdrawalComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
