import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Form1Component} from './component/form1/form1.component';
import {Form2Component} from './component/form2/form2.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,

    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'form1', component: Form1Component
      },
      {
        path: 'form2', component: Form2Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
