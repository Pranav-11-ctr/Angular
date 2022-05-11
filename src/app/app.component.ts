import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get input box value and display';
 
  displayval1='Pranav';
  disable1=true;
  displayval2='Murari';
  disable2=false;
  

  
}
