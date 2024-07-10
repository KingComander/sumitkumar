import { Routes } from '@angular/router';
import { title } from 'process';
import { DevilComponent } from './devil/devil.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AreadmoreComponent } from './areadmore/areadmore.component';
import { SreadmoreComponent } from './sreadmore/sreadmore.component';

export const routes: Routes = [
    {
        path:"", component:DevilComponent
    },
    {
        path:"about", component:AboutComponent, title:"About"
    },
    {
        path:"service", component:ServiceComponent, title:"Service"
    },
    {
        path:"skills", component:SkillsComponent, title:"Skills"
    },
    {
        path:"contact", component:ContactComponent, title:"Contact"
    },
    {
        path:"Areadmore", component:AreadmoreComponent , title:"About"
    },
    {
        path:"Sreadmore", component:SreadmoreComponent, title:"skills"
    }
    {
        path:"**", component:PageNotFoundComponent, title:"Page Not Found"
    }
];
