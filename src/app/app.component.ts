import { CssSelector } from '@angular/compiler';
import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loop Case';
  users=['Pranav','Prabhat','Subham','Rohit','Rahul'];
  userList=[
    {name:'Pranav',Roll:83,Branch:'CSE'},
    {name:'Prahat',Roll:94,Branch:'Cse'},
    {name:'Sumit',Roll:20,Branch:'Aeie'}
  ]
  studentList=[
    {name:'Pranav',Roll:83,Language:['c','c++','java']},
    {name:'Prabhat',Roll:85,Language:['R','C','c++']},
    {name:'Rohit',Roll:70,Language:['C++',"java"]}
  ]
 
  

  
}
