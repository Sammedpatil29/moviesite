import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  carouselItems  = [
  {
    "title" : "Lion King",
    "description" : "fjlvhdfivhdfivhdfiohdfiohdfiovh",
    "imageUrl": "https://media.wdwnt.com/2019/02/collageerfef.jpg"
  },
  {
    "title" : "Wonder Woman",
    "description" : "asdfghjkmnbvcxz cvbnmytre",
    "imageUrl": "https://i0.wp.com/plotandtheme.com/wp-content/uploads/2017/06/wonderwoman-1280-9amembargo-1488818748850_1280w.jpg?fit=1280%2C720&ssl=1"
  },
  {
    "title" : "justice league",
    "description" : "kfhsihiofs slhsiughiuof kjfsviusgorg8orgh",
    "imageUrl": "https://m.media-amazon.com/images/S/pv-target-images/14860db58706ae4748e6770f7902886fb440f4bded379a218b988ac8e2b0dcdc._SX1080_FMjpg_.jpg"
  },
  {
    "title" : "justice league",
    "description" : "kfhsihiofs slhsiughiuof kjfsviusgorg8orgh",
    "imageUrl": "https://m.media-amazon.com/images/S/pv-target-images/14860db58706ae4748e6770f7902886fb440f4bded379a218b988ac8e2b0dcdc._SX1080_FMjpg_.jpg"
  }
]

numbers = [1, 2, 3, 4]

trackByFn(index: number, item: any): number | string {
  // Use a unique identifier if available (e.g., item.id)
  return item.id || index;
}

clicked(moviename:any){
  alert(`clicked on ${moviename}`)
}

}
