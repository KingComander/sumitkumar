import { IMAGE_LOADER } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-webpage',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterLink],
  templateUrl: './webpage.component.html',
  styleUrl: './webpage.component.css'
})
export class WebpageComponent {
  
  first:any[]=[
    {id:2, img:"../assets/img/great-smoky-mountains-national-park-nc-western-north-carolina-dave-allen.jpg", h1:"Our call service world quality", cont:"Semple text.Click to select the Text Element."},
    {id:3, img:"../assets/img/great-smoky-mountains-national-park-nc-western-north-carolina-dave-allen.jpg", h1:"Our call service world quality", cont:"Semple text.Click to select the Text Element."},
    {id:4, img:"../assets/img/great-smoky-mountains-national-park-nc-western-north-carolina-dave-allen.jpg", h1:"Our call service world quality", cont:"Semple text.Click to select the Text Element."},
    {id:5, img:"../assets/img/great-smoky-mountains-national-park-nc-western-north-carolina-dave-allen.jpg", h1:"Our call service world quality", cont:"Semple text.Click to select the Text Element."},
    {id:6, img:"../assets/img/great-smoky-mountains-national-park-nc-western-north-carolina-dave-allen.jpg", h1:"Our call service world quality", cont:"Semple text.Click to select the Text Element."},
    {id:7, img:"../assets/img/great-smoky-mountains-national-park-nc-western-north-carolina-dave-allen.jpg", h1:"Our call service world quality", cont:"Semple text.Click to select the Text Element."},
  ];

  second:any[]=[
    {id:12, no:"2.323", nop:"projects finished"},
    {id:13, no:"7.155", nop:"happy clients"},
    {id:14, no:"3.128", nop:"working hours"},
    {id:15, no:"3.128", nop:"working hours"},
  ];
}
