import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

  user: User = {} as User;
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // console.log(form.value);
      // console.log("Form submitted");
      this.users.push(form.value);
      form.reset();
    }
    
  }

}
