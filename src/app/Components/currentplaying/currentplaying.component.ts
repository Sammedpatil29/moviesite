import { Component } from '@angular/core';

@Component({
  selector: 'app-currentplaying',
  standalone: true,
  imports: [],
  templateUrl: './currentplaying.component.html',
  styleUrl: './currentplaying.component.css'
})
export class CurrentplayingComponent {

  popup(){
    alert('focused')
  }

}
