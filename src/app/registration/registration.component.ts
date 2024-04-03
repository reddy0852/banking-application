import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: ServicesService) { }
  msg: string = ""
  ngOnInit(): void {
  }
  register(form: NgForm) {
    this.service.postRegister(form.value).subscribe((res: any) => {
      this.msg = "Successfully registered";
      console.log(res);
    })
  }
}
