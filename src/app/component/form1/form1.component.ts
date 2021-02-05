import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() {
  }

  users = [];
  name = '';
  age = null;

  ngOnInit(): void {
  }

  check(myForms): void {
    if (this.name && this.age >= 1) {
      this.users.push(myForms.value);
      this.name = '';
      this.age = '';
      console.log(this.users);
    }

  }
}
