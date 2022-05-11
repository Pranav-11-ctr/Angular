import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get input box value and display';
  displayVal:string='';
  getValue(val :string)
  {
    console.warn(val);
    this.displayVal=val;
  }
  

  
}
