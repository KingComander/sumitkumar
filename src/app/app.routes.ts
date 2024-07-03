import { Routes } from '@angular/router';
import { title } from 'process';
import { DevilComponent } from './devil/devil.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path:"", component:DevilComponent
    },
    {
        path:"about", component:AboutComponent, title:"About"
    // },
    // {
    //     path:"", component:, title:""
    // },
    // {
    //     path:"", component:, title:""
    // },
    // {
    //     path:"", component:, title:""
    }
];
