import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  user = [];
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.min(1));

  myForm = new FormGroup({
    name: this.name,
    age: this.age,

  });

  constructor() {
  }


  pushUser(): void {
    this.user.push(this.myForm.value);
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
