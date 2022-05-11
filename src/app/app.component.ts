import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get input box value and display';
 count=0;
 getValue(val:string)
 {
   val==='add'?this.count++:this.count--;
 }
  

  
}
