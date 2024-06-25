import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonService } from '../../Services/common.service';
import { HomeComponent } from '../home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrentplayingComponent } from '../currentplaying/currentplaying.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,HomeComponent,HttpClientModule, CurrentplayingComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor (private commonservice: CommonService, private http:HttpClient) {}

  // ngOnInit(): void {
  //   const details = this.commonservice.getdata();
  //   console.log(details)
  // }
  url = 'www.omdbapi.com'

  getdata() {
      this.http.get("https://api.movieposterdb.com/v1/movie").subscribe((data:any)=>
      {
    console.log(data)
      })
     }

}
