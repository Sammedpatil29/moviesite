import { Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    {
        component:LayoutComponent,
        path:""
    },
    {
        component:HomeComponent,
        path:"home"
    }
];
