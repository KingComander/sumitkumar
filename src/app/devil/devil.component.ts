import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
@Component({
  selector: 'app-devil',
  standalone: true,
  imports: [HeaderComponent,AboutComponent],
  templateUrl: './devil.component.html',
  styleUrl: './devil.component.css'
})
export class DevilComponent {

}
