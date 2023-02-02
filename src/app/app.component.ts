import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Route } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task_1';

showFirst : boolean = true;
display:string='initial'

toggle(){
 this.showFirst = !this.showFirst;
}
}

