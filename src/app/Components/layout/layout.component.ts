import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent  {
sammed: any;
  constructor (private commonservice: CommonService) {}
click() {
 this.sammed = this.commonservice.sammed;
 console.log(this.sammed)
 alert(this.sammed)
}
}
