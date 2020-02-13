import { Component } from '@angular/core';
import {Router} from  '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular7Config';
  constructor(private router:Router){}
  navigatePage4():any{
      this.router.navigate(["/page5"])
  }
}
